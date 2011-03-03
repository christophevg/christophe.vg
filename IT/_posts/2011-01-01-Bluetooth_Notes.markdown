---
layout: post
title: Bluetooth Notes
---

## goal
 
Use my bluetooth enabled (linux) laptop, running Fedora core, and dial out...

## setup

Doing a grep on my dmesg revealed that my kernel contained the Bluez bluetooth extensions, so all I needed to do was to get some packages to have CLI tools from [http://bluez.sourceforge.net/download/redhat/](http://bluez.sourceforge.net/download/redhat/).

I downloaded and installed 
* bluez-bluefw-1.0-1.i386.rpm   
* bluez-libs-2.7-1.i386.rpm
* bluez-hcidump-1.8-1.i386.rpm  
* bluez-utils-2.7-1.i386.rpm

## getting bluetooth up and running and connecting to the phone

{% highlight bash %}
$ /etc/init.d/bluetooth start
Starting Bluetooth subsystem: hcid sdpd
Can't open HIDP control socket: Invalid argument
hidd hid2hci rfcomm.

$ hciconfig
hci0:   Type: USB
      BD Address: 00:10:C6:23:CE:AF ACL MTU: 192:8  SCO MTU: 64:8
      UP RUNNING PSCAN ISCAN
      RX bytes:3908 acl:129 sco:0 events:211 errors:0
      TX bytes:2691 acl:102 sco:0 commands:53 errors:0

$ hcitool scan
Scanning ...
      00:60:57:9D:66:2B       Xtof

$ sdptool search DUN
Inquiring ...
Searching for DUN on 00:60:57:9D:66:2B ...
Service Name: Dial-up networking
Service RecHandle: 0x10023
Service Class ID List:
  "Dialup Networking" (0x1103)
  "Generic Networking" (0x1201)  
Protocol Descriptor List:
  "L2CAP" (0x0100)
  "RFCOMM" (0x0003)
    Channel: 1
Language Base Attr List:
  code_ISO639: 0x656e
  encoding:    0x6a
  base_offset: 0x100
Profile Descriptor List:
  "Dialup Networking" (0x1103)
    Version: 0x0100
 
$ l2ping 00:60:57:9D:66:2B
Ping: 00:60:57:9D:66:2B from 00:10:C6:23:CE:AF (data size 20) ...
0 bytes from 00:60:57:9D:66:2B id 200 time 60.57ms
0 bytes from 00:60:57:9D:66:2B id 201 time 42.33ms
2 sent, 2 received, 0% loss

$ rfcomm bind 0 00:60:57:9D:66:2B 1

$ rfcomm show
rfcomm0: 00:60:57:9D:66:2B channel 1 clean

$ mknod /dev/rfcomm0 c 216 0
{% endhighlight %}

## connecting to the phone's functionality aka modem

To be able to actually communicate with the phone, there needs to be a trusted relationship. this relationship is based on a shared secret or pin. to bootstrap this process I took the following steps.

In /etc/bluetooth/hcid.conf there is a reference to pin-helper a small application that helps to get the pin exchange gogin. it was missing, so I replaced it with a small script:

{% highlight bash %}
#!/bin/bash
echo "PIN:1234"
{% endhighlight %}

Now let's make sure their is no communication before the pin exchange has been performed:

{% highlight bash %}
$ cat < /dev/rfcomm0
{% endhighlight %}
  
The phone will ask for a pin, enter 1234. The connection will be completed. After this first connection you could even put the authorization requirement off and consecutive connections will pass without any additional intervention. Else just "accept" the connection - maybe not such a bad idea afterall :)

{% highlight bash %}
$ minicom
 
Use "C-a z" to get a popup window, then use "o" to configure, then
select "a" to set the serial device (/dev/rfcomm0), press return to
exit the popup window, select "save as default" and exit the popup,
select "x" to lease minicom.
 
$ minicom
                                                                               
Welcome to minicom 2.00.0
                                                                             
OPTIONS: History Buffer, F-key Macros, Search History Buffer, I18n
Compiled on Sep 12 2003, 17:27:02.
                                                                             
Press CTRL-A Z for help on special keys
                                                                             
AT S7=45 S0=0 L1 V1 X4 &c1 E1 Q0
OK
{% endhighlight %}

The OK shows the modem is responding, so we're set.

## calling home

  ATDT012345678

et voila ... my wife jumps up and runs to the phone ... success !

## support

Bluetooth is pretty nice, I just bought a new gsm, a Sony Ericson Z600, and all this worked like a charm.
