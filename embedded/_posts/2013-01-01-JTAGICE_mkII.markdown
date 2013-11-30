---
layout: post
title: JTAGICE mkII
---

There are many programmers, but because I know I'll also will need to debug
stuff on my MCU's, I decided to buy the more advanced JTAGICE mkII.

To handle the programmer when programming e.g. my [ATMEGA168](ATMEGA168.html),
I use [avrdude](Avrdude.html).

## ISP using SPI

The JTAGICE mkII comes with the *squid cable*, a female JTAG connector with 10
loose wires. It allows you to separate the 6 wires needed to connect the
[ISP](http://en.wikipedia.org/wiki/In-System_Programming) (In System
Programming) to the MCU's
[SPI](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus). The
following table shows which 6 of the 10 JTAG wires are matched to the wires
from the squid cable:

<table class="info">
  <tr class="header">
    <th>JTAG pin no.</th>
    <th>JTAG pin desc.</th>
    <th>MCU pin desc.</th>
    <th>Squid Cable Color</th>
  </tr>
  <tr><th>1</th>  <td>TCK</td>    <td>SCK</td>         <td>black</td></tr>
  <tr><th>2</th>  <td>GND</td>    <td>GND</td>         <td>white</td></tr>
  <tr><th>3</th>  <td>TDO</td>    <td>MISO</td>        <td>grey</td></tr>
  <tr><th>4</th>  <td>VTref</td>  <td>VTref(=VCC)</td> <td>purple</td></tr>
  <tr><th>5</th>  <td>&nbsp;</td> <td>&nbsp;</td>      <td>&nbsp;</td></tr>
  <tr><th>6</th>  <td>nSRST</td>  <td>RESET</td>       <td>green</td></tr>
  <tr><th>7</th>  <td>&nbsp;</td> <td>&nbsp;</td>      <td>&nbsp;</td></tr>
  <tr><th>8</th>  <td>&nbsp;</td> <td>&nbsp;</td>      <td>&nbsp;</td></tr>
  <tr><th>9</th>  <td>TDI</td>    <td>MOSI</td>        <td>red</td></tr>
  <tr><th>10</th> <td>&nbsp;</td> <td>&nbsp;</td>      <td>&nbsp;</td></tr>
</table>

When setting this up on a breadboard, I use 6 pins of a break-away 0.1" strip
male header. This allows me to cleanly connect the 6 required wires. If I want
to add this to a PCB, I can of course use a 10 (5x2) pin female connector into
which the JTAG connector can be plugged in.

<div class="thumb circuit left" style="clear:both">
  <a href="http://circuits.io/circuits/3064" target="_blank">
    <img src="http://circuits.io/circuits/3064/schematic" height="300"><br>
    http://circuits.io/circuits/3064
  </a>
</div>

<div class="thumb left">
  <a href="images/full/squid_cable.jpg" target="_blank">
    <img src="images/thumb/squid_cable.jpg"><br>
    Squid cable wired to breadboard
  </a>
</div>

<br clear="both">

Two wires can already be connected to their final destination: VTref and GND
can go respectively to the 5V (regulated) power supply and GND to ground. The
four remaining wires will need to be connected to the MCU that is going to be
programmed or debugged.

* [Connecting to a target board with the AVR JTAGICE
  mkII](http://www.atmel.com/Images/doc2562.pdf)
* [JTAGICE mkII Hardware
  Description](http://support.atmel.no/knowledgebase/avrstudiohelp/mergedProject
  s/JTAGICEmkII/mkII/Html/JTAGICE_mkII_Hardware_description.htm)
* [Connecting to an SPI
  target](http://www.atmel.no/webdoc/jtagicemkii/jtagicemkii.connecting_spi.html
  )

## JTAG

After the [ATMEGA168](ATMEGA168.html), I started using the
[ATMEGA1284p](ATMEGA1284p.html). This MCU comes with a lot more memory, two
USARTs,... but also with a JTAG interface.

You live you learn ... For some reason I initially thought that the JTAG
protocol was only for debugging, so I used ISP using SPI as describeb above to
program and JTAG for debugging, requiring me to switch back and forth between
ISP and JTAG. I wondered if I couldn't program using JTAG. Short story: of
course, it simply works :-)

The setup isn't that different from the ISP setup:

<div class="thumb circuit left" style="clear:both">
  <a href="http://circuits.io/circuits/6894" target="_blank">
    <img src="http://circuits.io/circuits/6894/schematic" height="300"><br>
    http://circuits.io/circuits/6894
  </a>
</div>

<br clear="both">

The programming process using [avrdude](Averdude.html) remains identical, apart
from the the <tt>-c</tt> switch that now simple is set to <tt>jtag2</tt>.

{% highlight console %}
$ avrdude -p atmega1284p -P usb:5a:cb -c jtag2 -U flash:w:main.hex 

avrdude: AVR device initialized and ready to accept instructions

Reading | ################################################## | 100% 0.00s

avrdude: Device signature = 0x1e9705
avrdude: NOTE: FLASH memory has been specified, an erase cycle will be performed
         To disable this feature, specify the -D option.
avrdude: erasing chip
avrdude: reading input file "main.hex"
avrdude: input file main.hex auto detected as Intel Hex
avrdude: writing flash (1930 bytes):

Writing | ################################################## | 100% 0.13s

avrdude: 1930 bytes of flash written
avrdude: verifying flash memory against main.hex:
avrdude: load data flash data from input file main.hex:
avrdude: input file main.hex auto detected as Intel Hex
avrdude: input file main.hex contains 1930 bytes
avrdude: reading on-chip flash data:

Reading | ################################################## | 100% 0.16s

avrdude: verifying ...
avrdude: 1930 bytes of flash verified

avrdude: safemode: Fuses OK

avrdude done.  Thank you.
{% endhighlight %}
