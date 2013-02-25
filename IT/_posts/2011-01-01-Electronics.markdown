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
  covering _my_ needs :-) All diagrams on these pages are all availabel on my
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

<div class="thumb circuit left" width="250">
  <a href="http://circuits.io/circuits/2367" target="_blank">
    <img src="http://circuits.io/circuits/2367/schematic" height="100"><br>
    http://circuits.io/circuits/2367
  </a>
</div>

<br clear="both">

It's of course a bit more practical with a button :-)

<div class="thumb circuit left" width="250">
  <a href="http://circuits.io/circuits/2455" target="_blank">
    <img src="http://circuits.io/circuits/2455/schematic" height="100"><br>
    http://circuits.io/circuits/2455
  </a>
</div>

<br clear="both">

Next up ... fading in ... fading out ...

