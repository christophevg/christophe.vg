---
title: Connected Lightbulb
tags:
  - fun
  - arduino
header:
  teaser: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v2.jpeg
  image: /makes/images/header/connected-lightbulb-v2.jpeg
gallery-v2:
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v2.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v2.jpeg
    alt: "Connected Lightbulb version 2"
    title: "Connected Lightbulb version 2"
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v2-top.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v2-top.jpeg
    alt: "Connected Lightbulb version 2 - Top"
    title: "Connected Lightbulb version 2 - Top"
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v2-bottom.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v2-bottom.jpeg
    alt: "Connected Lightbulb version 2 - Bottom"
    title: "Connected Lightbulb version 2 - Bottom"
gallery-v3:
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v3.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v3.jpeg
    alt: "Connected Lightbulb version 3"
    title: "Connected Lightbulb version 3"
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v3-closed.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v3-closed.jpeg
    alt: "Connected Lightbulb version 3 - Internet Inside"
    title: "Connected Lightbulb version 3 - Internet Inside"
  - url: /makes/images/full/connected-lightbulb/connected-lightbulb-v3-short.jpeg
    image_path: /makes/images/thumb/connected-lightbulb/connected-lightbulb-v3-short.jpeg
    alt: "Connected Lightbulb version 3 - Short-cut"
    title: "Connected Lightbulb version 3 - Short-cut"
---

Not everything has to be all work and no play. Sometimes, we just play. My good friend [Anthony](http://anthony.liekens.net) sometimes hosts team building events. His current topic of choice is the Internet of Things. To illustrate the core idea of the IoT, he uses the case of the connected lightbulb.

# Enter: The Internet of Things

The Internet of Things is basically an economy of scale: computers today are so small that it becomes possible to put them into "things", which makes them cheaper by the dozen, triggering even further miniaturisation, and so on and on.

So computers no longer need humans and can now also be useful to things ... that in their turn are useful to humans, who communicate with these things using ... computers. So in the end nothing has changed, just the scale and the number of applications. That's (probably - because I haven't had the luck to attend one of Anthony's team building events) the story Anthony tells the team that needs building. 

Next up: the actual building: Everybody, divided into groups gets an internet connected lightbulb. Using the wonderfully simple [If This Then That (IFTTT)](http://ifttt.com) all groups are soon working as teams, making sure that the lightbulb turns red when a new email arrives. Yeah, team!

So to host these team building events, he needed internet-connected lightbulbs. [Philips Hue](http://meethue.com) I hear you say? Yeah right... a single lamp costs about &euro;60 and you still need a "starter kit" first, which apparently starts somewhere around the same price. The latter comes with a "bridge", so internet-connected ... _naah_.

# Version 1 - The Mock-up

Having been playing with [Particle Photons](https://www.particle.io/products/hardware/photon-wifi-dev-kit) he thought that combining that with an [Adafruit Neopixel 24](https://www.adafruit.com/product/1586) would basically provide him with an actual, basic "internet-connected light(bulb)". Even more, the Photon costs about &euro;20 and the Neopixel ring about &euro;17. Which together is even way below the price of a single Hue lamp. With about &euro;23 to spare on a bulb-like enclosure and converter from 220V to 5V, even a single production item would be cheaper than the existing _sort-of-solution_.

In Belgium, our country, we have this wonderful store, [Action](http://www.action.be). They sell all sort of cheap-ass things, thus often a dream-come true for makers. One of the items they offer is a LED disco light bulb. It's basically 3 LEDs in series, powered by a converter bringing down 220V to around 8V and a small motor to make the facet-dome rotate. They sell this at about &euro;3! (I kid you not.) So open it and throw everything out, just keeping the enclosure.

As a quick solution to the power conversion, Anthony took an Apple USB charger and ripped it apart, to fit it in the bulb, using USB connectors to wire it to the Photon, and the Neopixel ring.

Done!

# Version 2 - The Prototype

After having built version 1 using a teared down Apple USB charger, he was looking for a better solution to bring 220V down to 5V. He found the [HiLink ACDC 5V 3W module](https://www.aliexpress.com/store/product/Hi-Link-ac-dc-power-module-5v-3w-220v-isolated-ac-dc-converter/345286_32360232521.html). Wonderful. So now all that was left, was once again, putting it all together.

That's when I entered the [Open Garage](http://opengarage.org). Since I had everything required to do just that, I offered an afternoon of my time to make a simple board with headers to fit the Photon and the HiLink and allow for attaching the 220V and the Neopixel. No rocket science, just a bit of fun, mostly refreshing my rusty soldering skills and Anthony had three boards, ready to be plugged in.

{% include gallery id="gallery-v2"%}

When we finished version 2, Anthony made a little Youtube video, showing the possibilities and outlining some of the technical components we used. It shows also the lamps in action, using some basic code, hosted on a web page. So, no mandatory proprietary app required.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_ZPRNsgZJc8?rel=0" frameborder="0" allowfullscreen></iframe>

# Version 3 - The Proof-of-Concept

Besides the converter, the motor driving the dome was also removed, and that tickled my interest. Could we keep that in there, still fit the Photon and the HiLink and drive it using the Photon?

I took a Photon and HiLink module back to my shop and started trying out different setups around the motor. After a few tries I managed to get everything in the bulb, including headers, so that none of the modules had to be soldered. It was a great way to discover nice soldering and PCB mounting tricks to get it done.

So now, we had a drop-in replacement for the original &euro;3 disco light, with far more possibilities.

## Fail Forward

While fitting everything in there, I decided to replace the screw terminals with simple Dupont contacts. Not such a good idea. The dome had been spinning nicely for about an hour when I left the Open Garage, heading home. En route, I received a message from Anthony:

<div style="padding-left: 150px; padding-right: 150px; margin-bottom: 1em;">
  <img src="/makes/images/full/connected-lightbulb/connected-lightbulb-v3-short.png"><br>
  <div style="text-align: right">
    <img src="/makes/images/full/connected-lightbulb/connected-lightbulb-v3-short-oops.png">
  </div>
</div>

{% include gallery id="gallery-v3"%}

# Version 4 - Feature Creep

Will there be a next version? Probably. It's just too much fun trying to squeeze in even more, allowing for more crazy use cases. The first idea that came to our mind was the possibility to use the dome as a button to give feedback.

We'll see ;-)
