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
