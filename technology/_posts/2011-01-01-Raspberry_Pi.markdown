---
title: Raspberry Pi Notes
---

These are my notes on the Raspberry Pi, model 3b.

> *Why hook up a screen, keyboard and mouse, if all you need is a network connection? ;-)*

## Getting Started with Noobs

Noobs is a nice framework to automate the setup of your Raspberry Pi. The following modifications enable a true headless install, including setup of the SSH server and provisioning of a authorized public key for immediate passwordless access.

Put the micro SD card with the stock Noobs image in your laptop and perform the following edits:

### Enable automated and interactionless/silent Install

Edit `recovery.cmdline`:

* add `runinstaller` at the beginning
* add `silentinstall` at the end

### Provision Wifi

Add to `RECOVERY/os/Raspbian/partition_setup.sh` (below similar code for `ssh.txt`):

```sh
if [ -f /mnt/wpa_supplicant.conf ]; then
  cp /mnt/wpa_supplicant.conf /tmp/1/
fi
```

Add `wpa_supplicant.conf` file to `RECOVERY/`

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="..."
    psk="..."
}
```

### SSH server enable by default

* create `ssh` file in `RECOVERY/` (`touch`)
* change default password in `RECOVERY/os/Raspbian/os.json`
* provision a public key:
  * Add to `RECOVERY/os/Raspbian/partition_setup.sh`:

```sh
if [ -f /mnt/authorized_keys ]; then
  mkdir -p /tmp/2/home/pi/.ssh
  cp /mnt/authorized_keys /tmp/2/home/pi/.ssh/authorized_keys
fi
```

  * Add an `authorized_keys` file to `RECOVERY/`

* For first time connecting use : `ssh -o StrictHostKeyChecking=no pi@xxx.xxx.xxx.xxx` to accept adding host to known hosts

## Getting Started without Noobs

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

> From https://www.raspberrypi.org/documentation/remote-access/ssh/
>
> As of the November 2016 release, Raspbian has the SSH server disabled by default. You will have to enable it manually. This is done using raspi-config:
> 
> Enter sudo raspi-config in the terminal, first select Interfacing options, then navigate to ssh, press Enter and select Enable or disable ssh server.
> 
> For headless setup, SSH can be enabled by placing a file named 'ssh', without any extension, onto the boot partition of the SD card.

Connect to the Pi using the default `pi` user with password `raspberry`:

```bash
$ ssh pi@192.168.0.2
The authenticity of host '192.168.0.2 (192.168.0.2)' can't be established.
ECDSA key fingerprint is SHA256:uqxSJJuYpe1C0VIRIgUh3ObFjXe8lLldEpcorgq6MhM.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.0.2' (ECDSA) to the list of known hosts.

pi@192.168.0.2's password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms f or each program are described in the
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
Changing password f or pi.
(current) UNIX password: 
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```

> Even better: setup key-based SSH access and disable password access ;-)

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

### Freeing UART/console for applications

By default, the Pi uses its UART for its console. This means that you can't connect external devices. To free it up do the following:

1. Go into the configuration tool and disable serial support: `sudo raspi-config`, go into `5 Interfacing Options`, then select `P6 Serial` and acknowledge you want to disable serial.
2. Now, one more step is needed, because else you won't find any serial ports: edit `/boot/config.txt` and add `enable_uart=1`.
3. ALSO add `core_freq=250` to the same `/boot/config.txt`, or else the handling of the data with base its baudrate on a variable clock speed ()?!) (See [http://raspberrypi.stackexchange.com/questions/45570/](http://raspberrypi.stackexchange.com/questions/45570/) for some background information).
4. reboot

Now, after installing e.g. `screen`, you can access UART using e.g. `screen /dev/ttyS0`.

### Update,... Upgrade

```bash
% sudo apt update
...
% sudo apt upgrade
...
```

### ... without a _head_

* `sudo apt-get --purge remove x11-*` frees ~1.4GB (https://raspberrypi.stackexchange.com/questions/5258/how-can-i-remove-the-gui-from-raspbian-debian)
* `sudo apt-get autoremove` completes the picture

before:
```bash
pi@raspberrypi:~ $ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  3.5G  9.0G  28% /
devtmpfs        459M     0  459M   0% /dev
tmpfs           463M     0  463M   0% /dev/shm
tmpfs           463M  6.4M  457M   2% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           463M     0  463M   0% /sys/fs/cgroup
/dev/mmcblk0p6   63M   20M   44M  31% /boot
tmpfs            93M     0   93M   0% /run/user/1000
```

after:
```bash
pi@raspberrypi:~ $ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  2.1G   11G  17% /
devtmpfs        459M     0  459M   0% /dev
tmpfs           463M     0  463M   0% /dev/shm
tmpfs           463M  6.4M  457M   2% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           463M     0  463M   0% /sys/fs/cgroup
/dev/mmcblk0p6   63M   20M   44M  31% /boot
tmpfs            93M     0   93M   0% /run/user/1000
```

### Make sure "time" is correct...

* `apt-get install ntpdate` to force update of time on boot before `ntpd` starts
  force update:
  ```bash
  sudo /etc/init.d/ntp stop
  sudo ntpd -q -g
  sudo /etc/init.d/ntp start
  ```

## Use it...

### ... to host a mobile uplink, with a Huawei E3372 LTE dongle

Start by disabling the PIN using a "normal" computer.

Currently you need to edit `/lib/udev/rules.d/40-usb_modeswitch.rules` and change

```
ATTRS{idVendor}=="12d1", ATTR{bInterfaceNumber}=="00", ATTR{bInterfaceClass}=="08", RUN+="usb_modeswitch '%b/%k'
```
to read
```
'%k'
```

at the end.

Reboot and afterwards, the dongle will have created `eth1` with IP address `192.168.8.100` and will act as a NAT router.

> Reference: [https://github.com/RPi-Distro/repo/issues/47](https://github.com/RPi-Distro/repo/issues/47)

### ... as a WiFi Access Point

```bash
$ sudo apt-get install dnsmasq hostapd
```

Edit `/etc/dhcpcd.conf` and add
```
denyinterfaces wlan0
```

Edit `/etc/network/interfaces`, edit `wlan0` section:

```
allow-hotplug wlan0  
iface wlan0 inet static  
    address 172.24.1.1
    netmask 255.255.255.0
    network 172.24.1.0
    broadcast 172.24.1.255
```

```bash
$ sudo service dhcpcd restart
$ sudo ifdown wlan0
$ sudo ifup wlan0
```

Edit `/etc/hostapd/hostapd.conf`

```
interface=wlan0
driver=nl80211
ssid=<YourNetworkName>

hw_mode=g
channel=6
ieee80211n=1
wmm_enabled=1
ht_capab=[HT40][SHORT-GI-20][DSSS_CCK-40]
macaddr_acl=0

auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_key_mgmt=WPA-PSK
wpa_passphrase=<YourNetworkPassword>
rsn_pairwise=CCMP
```

Edit `/etc/default/hostapd`

```
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

Edit `/etc/dnsmasq.d/dnsmasq.wlan0.conf`:

```
interface=wlan0
listen-address=172.24.1.1
bind-interfaces
server=8.8.8.8 
domain-needed
bogus-priv
dhcp-range=172.24.1.50,172.24.1.150,12h
```

Edit `/etc/sysctl.conf`:

```
net.ipv4.ip_forward=1
```

Setup NAT rules for `eth0` and `wlan0` to use `eth1` uplink:

```
sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE  
sudo iptables -A FORWARD -i wlan0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT  
sudo iptables -A FORWARD -i eth1 -o wlan0 -j ACCEPT 
sudo iptables -A FORWARD -i eth00 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT  
sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT 
```

```bash
$ sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
```

Edit `/etc/rc.local` and add (before `exit 0`):

```
iptables-restore < /etc/iptables.ipv4.nat  
```

```bash
$ sudo service hostapd start  
$ sudo service dnsmasq start
```

> Reference: [https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/](https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/)

### ... as a DHCP Server (for eth0)

Edit `/etc/network/interfaces`

```
auto eth0
iface eth0 inet static
    address 192.168.0.1
    netmask 255.255.255.0
```

Edit `/etc/dnsmasq.d/dnsmasq.eth0.conf`:

```
interface=eth0
listen-address=192.168.0.1
bind-interfaces
server=8.8.8.8 
domain-needed
bogus-priv
dhcp-range=192.168.0.50,192.168.0.150,12h
```

Optionally, add to `/etc/dnsmasq.d/dnsmasq.eth0.conf`

```
dhcp-option=3
dhcp-option=6
```

to not have it set default router and DNS resolvement, if e.g. the host has another internet connection.

References:
* [https://www.raspberrypi.org/learning/networking-lessons/lesson-3/plan/](https://www.raspberrypi.org/learning/networking-lessons/lesson-3/plan/)
* [https://superuser.com/questions/306121/i-dont-want-my-dhcp-to-be-a-default-gateway](https://superuser.com/questions/306121/i-dont-want-my-dhcp-to-be-a-default-gateway)

### ... as an audio recording + playback device using Sound Blaster Play 2

* use `alsamixer` to set audio parameters
* use `sudo alsactl store` to save paramters

* `aplay -D hwplug:1 recoding.wav`

To make the Sound Blaster the only and default device:

Edit `/etc/asound.conf`:

```
pcm.!default {
    type hw
    card 1
}

ctl.!default {
    type hw           
    card 1
}
```

> `card` should be the card number in `aplay -l` and `arecord -l`

To record use `arecord -f cd -vv test.wav`
To play use `aplay test.wav`

Reference:
* [http://www.g7smy.co.uk/2013/08/recording-sound-on-the-raspberry-pi/](http://www.g7smy.co.uk/2013/08/recording-sound-on-the-raspberry-pi/)
* [https://raspberrypi.stackexchange.com/questions/19705/usb-card-as-my-default-audio-device](https://raspberrypi.stackexchange.com/questions/19705/usb-card-as-my-default-audio-device)
