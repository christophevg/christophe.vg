---
layout: post
title: Electronics - first steps
---

While doing research for possible master thesis topics, I'm looking into the
idea of wireless sensor network. At KULeuven the DISTRINET research group is
spending quiet some effort into this and I want to make sure that I fully
understand it before I decide to move in this direction or not.

One part is wireless sensor networks, which I'm looking into using the 
[Raven boards](Raven.html). Another part consists of designing and 
implementing an electronics component.

This page is kind of a transcript of my first steps into electronics, which will 
hopefully end with a working prototype of the component I need to develop if I 
take on that thesis topic.

## Step 1 : Let's start reading

I really thought that it would take a Google search and potentially some bucks 
to buy the de facto introduction reading material and be on my way.

That turned out not to be the case. So I was probably looking in the wrong 
places, not using the right keywords. A few months back I attended a soldering 
class by Mitch Altman. I tried consulting him for any good references, but with 
no luck. He even pointed out that he also didn't know of any good books to get 
started and that he might be releasing one in a not so distant future.

It seems that, in contrast to the (desktop/server) software worls where I come 
from, the electronics world is not that novice-friendly documented (yet). One of 
the problems probably is also that it contains such a broad spectrum of 
possibilities, that there isn't one (right) way to introduce someone to 
electronics. This means that I also will have to digg in and start reading until 
some pieces start falling into place.

On the wonderful StackOverflow scene I found a page dealing with my exact 
question, titled: [Basic Electronics Book](http://electronics.stackexchange.com/questions/616/basic-electronics-book).
It lists some great books, but all of them are mainly references. From experience 
I know that at this embryonic stage, one needs a book that is a bit easier to 
read and reads more like a story with a specific point of view.

After some more searches I (once again) ended up at O'Reilly's.

### Book 1 : Making Embedded Systems

<div class="thumb right" style="clear:both">
  <img src="images/full/making_embedded_systems_cover.gif" alt="Making Embedded Systems">
</div>

The first book I took on was "[Making Embedded Systems](http://shop.oreilly.com/product/0636920017776.do)".
I think it was the right book to get me started from the world I came from, 
looking at embedded systems from a software developer's point of view, while 
introducing the hardware concepts pretty good.

Although it is nowhere near the component I will need to design and implement, I 
soon realized that I was required to go through the entire chain of _Hello World_ 
steps all over again. Only this time _Hello World_ means playing with blinking 
LEDs.

And although this book does indeed introduce many hardware aspects pretty nicely, 
it also points out that it barely scratches the surface and therefore refers to 
another (sister-) book "[Designing Embedded Hardware](http://shop.oreilly.com/product/9780596007553.do)", 
one that I also already had found through other searches.

### Book 2 : Designing Embedded Hardware

<div class="thumb right" style="clear:both">
  <img src="images/full/designing_embedded_hardware_cover.gif" alt="Designing Embedded Hardware">
</div>

After a great introduction, picking up this book was a great experience. Still
very much an introduction with many pointers to more, but once more a step up
the learning curve.

Its focus is a lot more on hardware and that was the right next step. Finally I
was introduced to SPI and other important aspects.

### Book 3 : Make: Electronics

<div class="thumb right" style="clear:both">
  <img src="images/full/make_electronics_cover.jpeg" alt="Make: Electronics">
</div>

I hesitated a long time before actually buying it, but this is really a great
book when trying to pickup electronics in a hands-on fashion. Many of the
initial experiments below where constructed from examples from this book.

### Diagrams

* To document circuits on my online pages I'm using
  [Circuits.io](http://circuits.io). Not only because I happen to know one of
  the creators, but simply because it was the best online tool I found so far -
  covering _my_ needs :-) All diagrams on these pages are all available on my
  [Cuircuits.ui profile page](http://www.circuits.io/circuits/user?uid=1785).

### Hardware

There are many sources to consult with respect to getting an initial hardware
setup. Below is a rough list of the hardware I bought during the first months.

* Digital Multi-meter: UNI-T UT39B
* soldering iron: Weller SPI-27 25W
* solder Sn60Pb40 - 0.80mm and 0.60mm
* helping hand
* pointy wirecutter
* 2 breadboards
* 3 PCB boards
* battery packs for 2 and 4 AA batteries
* assorted resistors & condensators pack from Vellman
* most of the components from the shopping lists from the Make: Electronics book
* solid wires in various colours
* ...

## Step 2 : Hello World

Although I'd love to create something that my wife doesn't frown upon, I have
to start with the basics: make a LED light up ... without burning it.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2367" target="_blank">
    <img src="http://circuits.io/circuits/2367/schematic" height="100"><br>
    http://circuits.io/circuits/2367
  </a>
</div>

<div class="thumb circuit left">
  <a href="images/full/hello_led.jpg" target="_blank">
    <img src="images/thumb/hello_led.jpg"><br>
    always on
  </a>
</div>

<br clear="both">

It's of course a bit more practical with a button :-)

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2455" target="_blank">
    <img src="http://circuits.io/circuits/2455/schematic" height="100"><br>
    http://circuits.io/circuits/2455
  </a>
</div>

<div class="thumb circuit left">
  <a href="images/full/hello_switch_led.jpg" target="_blank">
    <img src="images/thumb/hello_switch_led.jpg"><br>
    on/off
  </a>
</div>

<br clear="both">

Next up of course is having the LED fade in and out, like a heart-beat. I
followed the different examples from the excellent Make: Electronics book here.

First a basic setup with a relay. A relay basically contains a coil and a
2-way switch. When current flows through the coil, it magnetizes and it will
push the switch into the other position. When well connected, this might also
cause it to be no longer powered, thus losing its magnetic property and the
swith will fall back into its original position. And the cycle repeats itself.

The circuit is not that difficult, although that it looks a bit more
complicated at first. Just start at the power source and follow the current.
Notice that I've created a setup with two battery sources: one 9V and one
consisting of two 1.5V AA batteries. Combined in series these result in a
power source of 12V (9 + 2x1.5).

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2476" target="_blank">
    <img src="http://circuits.io/circuits/2476/schematic" height="290"><br>
    http://circuits.io/circuits/2476
  </a> 
</div>

<object width="560" height="315">
  <param name="movie" value="http://www.youtube.com/v/kG8f-J1K0ts?version=3&amp;hl=en_US"></param>
  <param name="allowFullScreen" value="true"></param>
  <param name="allowscriptaccess" value="always"></param>
  <embed src="http://www.youtube.com/v/kG8f-J1K0ts?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>
</object>

<br clear="both">

A relay looks kind of bulky, so let's introduce the transistor. Just like a
relay, it can switch a flow of electricity. It has three pins: the collector,
base and emitter. The collector receives current, the base controls the flow
and the emitter sends it through.

You could compare it to a switch: If you put a little current on the base, the
switch is closed and the current flows from the collector to the emitter. So
it's basically a on/off switch. In the case of the relay, we have a two-way on
switch. To create the same effect, two transistors, turning each other on and
of are needed.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2481" target="_blank">
    <img src="http://circuits.io/circuits/2481/schematic" height="290"><br>
    http://circuits.io/circuits/2481
  </a> 
</div>

<object width="560" height="315">
  <param name="movie" value="http://www.youtube.com/v/lLMTcqTKUIE?version=3&amp;hl=en_US"></param>
  <param name="allowFullScreen" value="true"></param>
  <param name="allowscriptaccess" value="always"></param>
  <embed src="http://www.youtube.com/v/lLMTcqTKUIE?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>
</object>

<br clear="both">

Note: In the movie I've added a switch, which is not included in the diagram :-)

But it's not quiet yet the effect I'm aiming for. Let's try it with the famous
555 timer.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2502" target="_blank">
    <img src="http://circuits.io/circuits/2502/schematic" height="290"><br>
    http://circuits.io/circuits/2502
  </a> 
</div>

<object width="560" height="315">
  <param name="movie" value="http://www.youtube.com/v/yjtR2P6eKc0?version=3&amp;hl=en_US"></param>
  <param name="allowFullScreen" value="true"></param>
  <param name="allowscriptaccess" value="always"></param>
  <embed src="http://www.youtube.com/v/yjtR2P6eKc0?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>
</object>

<br clear="both">

Yeah, we made heart beat ;-)

The 555 timer hides (a lot of) the complexity. Let's see if I can explain
everything in the diagram:

* connecting GND (pin 1) and VCC (pin 8) are pretty straightforward
* RESET requires a high value to avoid resetting (it's active low), so
  connected to the power source, it will keep the timer running.

That leaves us with TRIG (pin 2), OUT (pin 3) and THRES (pin 6).

The 555 timer allows us to generate a "pulse". This happens when the voltage on
the TRIGger is low (another active low). Internally, the timer will _flip_
into a different state.

The pulse is a fixed-time high voltage on OUT. The length of the pulse is
determined by the capacitance of the capcitor connected on TRESH (pin 6). When
this charges to 2/3, TRESH will detect this and internally, the timer will
_flop back_.

So let's walk through the circuit: initially there is no high voltage on TRIG,
which triggers the _flip_ and 9V is put on OUT. This causes capacitor C0 to
start charging, causing an increasing voltage on the transistor, which will
start eluminating the LED. After 2/3 of its charging time, TRESH will cause a
_flop_ and OUT goes back to low voltage.

Capacitor C0 now starts to discharge, causing a high voltage on TRIG for some
time. When C0 is fully discharged, the cycle repeats itself.

Okay, I understand the circuit. Now I want to modify it and actually show the
discharging of capacitor C0 back to OUT (which internally sinks this to GND).

This current will flow back through resistor R1, so I can put a LED in parallel
to that. To only show the back-current when discharging the capacitor, I added
a diode to that branch, blocking any charge current from going through the LED.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2505" target="_blank">
    <img src="http://circuits.io/circuits/2505/schematic" height="290"><br>
    http://circuits.io/circuits/2505
  </a> 
</div>

<object width="560" height="315">
  <param name="movie" value="http://www.youtube.com/v/Te_AX1X_7ag?version=3&amp;hl=en_US"></param>
  <param name="allowFullScreen" value="true"></param>
  <param name="allowscriptaccess" value="always"></param>
  <embed src="http://www.youtube.com/v/Te_AX1X_7ag?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>
</object>

<br clear="both">

Although this works, it doesn't seem to be a classic setup. It would be nice if
the output was taken out of the loop generation and only be used to do
something (else).

Also, the 555 can be configured (programmed is a bit strong here I think). The
length of the pulse (or the duration of the "on" cycle) and the length of the
interval (or the duration of the "off" cycle) can be set using resistors.

Let's once more walk through the entire circuit to make sure we _get_ how it
works. When activating the power source, the current flows through R1 and the
200K trimmer. It starts to charge capacitor C0, thus keeping the voltage on
TRIG initially low, which activates it and a high voltage on OUT will make the LED

When C0 reaches 2/3 of its capacity, THRES will be activated which causes OUT
to go low. When the 555 _flops_ back, DISCH will be grounded and allow for
sinking. This allows for C0 to discharge, until it reaches a level that again
triggers TRIG and the cycle repeats.

The 200K trimmer allows us to control the rate at which the capacitor charges
and discharges, thus allowing us to control the frequency of the oscillation.
There is in fact a little difference between charging and discharging. When
charging, the current flow through both R1 and the 200K trimmer and while
discharging only through the trimmer.

This can be eliminated by adding a diode in parallel with the trimmer, which
will eliminate it from the charge cycle and only include it in the discharge
cycle. This way the charge and discharge cycles can be configured independently.

<div class="thumb circuit left">
  <a href="http://circuits.io/circuits/2559" target="_blank">
    <img src="http://circuits.io/circuits/2559/schematic" height="290"><br>
    http://circuits.io/circuits/2559
  </a> 
</div>

<object width="560" height="315">
  <param name="movie" value="http://www.youtube.com/v/XOqSQaZmZLM?hl=en_US&amp;version=3&amp;rel=0"></param>
  <param name="allowFullScreen" value="true"></param>
  <param name="allowscriptaccess" value="always"></param>
  <embed src="http://www.youtube.com/v/XOqSQaZmZLM?hl=en_US&amp;version=3&amp;rel=0" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>
</object>

<br clear="both">

The CONT pin can be used to configure the timing/sensitivity of the RC circuit.
It seems that it is not often used, but varying the voltage will change the
speed.

## Step 3 : Play

Once you get the hang of it, it is more of the same. Not that it becomes
boring, on the contrary, but you can start having fun trying out thing. Below
is a list of other small pages that deal with different experiments.

* [SR Latch](SR_Latch.html)
