---
layout: post
title: Regulated Voltage Circuit
---

The wall socket in your house gives you 110 to 240V, depending on your physical
location in the world. Embedded systems typically use much lower voltages. Also
the current you get from the wall socket is typically AC (Alternating Current).
Embedded systems typically use DC (Direct Current). They are also much more
susceptible to glitches in their power supply.

Therefore it is important to have a very stable power supply to hook up your
designs. There are basically two ways to get your systems powered: batteries
and via an adapter, connected to the electric grid.

## The 5V Circuit

The circuit below shows somewhat _the_ default circuit you'll set up when
designing something around a processor (of course one requiring 5V).

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/3024" target="_blank">
    <img src="http://circuits.io/circuits/3024/schematic" width="600"><br>
    http://circuits.io/circuits/3024
  </a>
</div>

<br clear="both">

It consists of a 9V source, typically from an adapter plugged into the an
electric wall socket which is routed through an LM7805 regulator. This
regulator will bring down the voltage to 5V and try to ease out the ripples in
the voltage.

By itself, this _could_ be considered enough, but the regulator is not
perfect. The circuit provides some extras: first of all a diode (D<sub>0</sub>)
is added to avoid wrongly oriented currents, causing havoc on our circuits.
Next comes a switch to more easily control the status of the design. At the end
we also add a LED (protected by a resistor), simply to have a visual indication
that everything is ok.

These are all additions to make our lives easier and are not mandatory. The two
capacitors on the other hand are, although also not required, a good thing to
add to the design. They each bridge one side of the circuit, a 100 &mu;F on the
9V side and a 10 &mu;F on the 5V side. When all goes well, they charge until
full and then when ripples occur and the voltage drops, they kick in and
discharge, easing out the ripples even further.

Laying things out on a breadboard and adding a switch ...

<div class="thumb circuit left">
  <a href="images/full/regulated_voltage_breadboard.jpg" target="_blank">
    <img src="images/thumb/regulated_voltage_breadboard.jpg"><br>
    regulated voltage circuit on a breadboard
  </a>
</div>

<br clear="both">

To avoid dismantling the connector on the adapter, I've added a barrel jack.
This allows me to simply plug in the connector from the adapter.

## The 3V Circuit<a name="mcp1700">&nbsp;</a>

While designing my first [mote](XT0F-003.html), I wanted to use a [LIPO battery of
3.7V with 1400mAh](https://www.olimex.com/Products/Power/BATTERY-LIPO1400mAh/).
My design required 3.3V, so I had to create a drop. With a little help from a
[friend](http://aitec.be), I found the
[MCP1700](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en010642),
which perfectly fitted my requirements.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/4969" target="_blank">
    <img src="http://circuits.io/circuits/4969/schematic" width="600"><br>
    http://circuits.io/circuits/4969
  </a>
</div>

<br clear="both">

## The Boxed Version

As this is the first basic building block, I thought it might be a good idea to
actually build this in a small and boxed form factor, as a default power source
for my embedded projects. It's small and simple and allows me to start
experimenting with transferring such a design from the breadboard to a PCB.
Besides that it is also a good excuse to design an enclosure and print it using
my new 3D Printer ;-)

This first building block is called [XT0F-001](XT0F-001.html) and it's the
first component from my [XT0F](XT0F.html) family of components. On its
[page](XT0F-001.html), details about the actual implementation are collected in
more detail.
