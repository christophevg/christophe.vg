---
layout: post
title: Raspberry Pi Notes
---

These are my notes on the Raspberry Pi, model 3b.

## Getting Started

*Why hook up a screen, keyboard and mouse, if all you need is a network connection? ;-)*

By default, the Pi tries to acquire an address via DHCP. To perform initial configuration before hooking it up to a real network, we can connect the Pi directly to a host using a network cable. Running a DHCP server on the host we can provide the Pi with an address and connect to it.

On [Mac OS X](Mac_OS_X_Notes.html) this can be done like this:

Because your ethernet port won't have an IP address, set up one manually:

```bash
$ sudo ifconfig en0 192.168.0.1 netmask 255.255.0.0
$ ifconfig en0
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=10b<RXCSUM,TXCSUM,VLAN_HWTAGGING,AV>
	ether c8:2a:14:16:5c:12 
	inet 192.168.0.1 netmask 0xffff0000 broadcast 192.168.255.255
	inet6 fe80::ca2a:14ff:fe16:5c12%en0 prefixlen 64 scopeid 0x4 
	inet 169.254.190.203 netmask 0xffff0000 broadcast 169.254.255.255
	nd6 options=1<PERFORMNUD>
	media: autoselect (100baseTX <full-duplex,flow-control>)
	status: active
```

Next we need a DHCP server. This function is provided by the `bootp` daemon. We can configure it using `/etc/bootpd.plist`. A minimal configuration to hand out addresses in the `192.168.0.0/24` range is:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>bootp_enabled</key>
        <false/>
  <key>dhcp_enabled</key>
        <array>
         <string>en0</string>
        </array>
  <key>netboot_enabled</key>
        <false/>
  <key>relay_enabled</key>
        <false/>        
  <key>Subnets</key>
        <array>
                <dict>
                  <key>name</key>
                        <string>192.168.0.0/24</string>
                  <key>net_mask</key>
                        <string>255.255.255.0</string>
                  <key>net_address</key>
                        <string>192.168.0.0</string>
                  <key>net_range</key>
                        <array>
                                <string>192.168.0.2</string>
                                <string>192.168.0.254</string>
                        </array>
                  <key>allocate</key>
                        <true/>
                  <key>lease_max</key>
                        <integer>3600</integer>
                  <key>dhcp_router</key>
                        <string>192.168.0.1</string>
                  <key>dhcp_domain_name_server</key>
                        <array>
                                <string>192.168.0.1</string>
                        </array>
                  <key>dhcp_domain_search</key>
                        <array>
                                <string>revolvingsq.net</string>
                        </array>
                </dict>
        </array>
</dict>
</plist>
```

Start the `bootp` daemon using:

```bash
$ sudo /usr/libexec/bootpd -D -d -i en0
```

Check for requests and acknowledgments:

```
...
Mar  3 10:07:47  bootpd[92620] <Notice>: DHCP REQUEST [en0]: 1,b8:27:eb:24:42:25 <raspberrypi>
...
Mar  3 10:07:47  bootpd[92620] <Notice>: ACK sent raspberrypi 192.168.0.2 pktsize 303
```

The Pi can now be contacted at `192.168.0.2`.

Connect to the Pi using the default `pi` user with password `raspberry`:

```bash
$ ssh pi@192.168.0.2
The authenticity of host '192.168.0.2 (192.168.0.2)' can't be established.
ECDSA key fingerprint is SHA256:uqxSJJuYpe1C0VIRIgUh3ObFjXe8lLldEpcorgq6MhM.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.0.2' (ECDSA) to the list of known hosts.

pi@192.168.0.2's password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Feb 26 04:18:11 2016
pi@raspberrypi:~ $
```

We can now configure the Pi as needed.

### CHANGE THE DEFAULT PASSWORD

Everybody knows the default password for user `pi`. Change it:

```bash
$ passwd
Changing password for pi.
(current) UNIX password: 
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```

Even better: setup key-based SSH access ;-)

### Wifi

Find MAC address...

```bash
$ ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr b8:27:eb:db:02:f9  
          inet6 addr: fe80::ba27:ebff:fedb:2f9/64 Scope:Link
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:66 errors:0 dropped:66 overruns:0 frame:0
          TX packets:22 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:21792 (21.2 KiB)  TX bytes:4210 (4.1 KiB)
```

Find available networks...

```bash
$ sudo iwlist wlan0 scan
wlan0     Scan completed :
          Cell 01 - Address: 00:F7:6F:CE:3F:86
                    Channel:6
                    Frequency:2.437 GHz (Channel 6)
                    Quality=69/70  Signal level=-41 dBm  
                    Encryption key:on
                    ESSID:"WindyCloud"
                    Bit Rates:1 Mb/s; 2 Mb/s; 5.5 Mb/s; 11 Mb/s; 6 Mb/s
                              9 Mb/s; 12 Mb/s; 18 Mb/s
                    Bit Rates:24 Mb/s; 36 Mb/s; 48 Mb/s; 54 Mb/s
                    Mode:Master
                    Extra:tsf=0000000000000000
                    Extra: Last beacon: 70ms ago
                    IE: Unknown: 000A57696E6479436C6F7564
                    ...
```

Add to `/etc/wpa_supplicant/wpa_supplicant.conf`:

```
network={
    ssid="WindyCloud"
    psk="wifi password goes here"
}
```

Configure access router and toggle the `wlan` interface...

```bash
$ sudo ifdown wlan0
$ sudo ifup wlan0
$ ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr b8:27:eb:db:02:f9  
          inet addr:10.0.1.210  Bcast:10.0.1.255  Mask:255.255.255.0
          inet6 addr: fe80::ba27:ebff:fedb:2f9/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:129 errors:0 dropped:110 overruns:0 frame:0
          TX packets:49 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:38028 (37.1 KiB)  TX bytes:9996 (9.7 KiB)
```

And connect via the wireless interface from now on ...

```bash
$ ssh pi@10.0.1.210
The authenticity of host '10.0.1.210 (10.0.1.210)' can't be established.
ECDSA key fingerprint is SHA256:LiOjnYUsGQPwwOp/0m4XIAIxASI6CFQzwf0ADf4Vazc.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '10.0.1.210' (ECDSA) to the list of known hosts.

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Feb 26 02:29:22 2016 from 192.168.0.1
```

