---
title: Inspection Robot
tags:
  - professional
  - robot
header:
  teaser: /embedded/images/thumb/inspection-robot.jpeg
  image: /embedded/images/header/inspection-robot.jpeg
gallery:
  - url: /embedded/images/full/inspection-robot-render.png
    image_path: /embedded/images/thumb/inspection-robot-render.png
    alt: "Inspection Robot Render"
    title: "Inspection Robot Render"
  - url: /embedded/images/full/inspection-robot.jpeg
    image_path: /embedded/images/thumb/inspection-robot.jpeg
    alt: "Inspection Robot"
    title: "Inspection Robot"
  - url: /embedded/images/full/inspection-robot-top.jpeg
    image_path: /embedded/images/thumb/inspection-robot-top.jpeg
    alt: "Inspection Robot Top"
    title: "Inspection Robot Top"
---

In 2015 I was contracted by a very large industrial/pharmaceutical company to design and implement a solution for their QA team to be able to inspect certain locations in their factory that were very hard to reach. The combination of a height restriction of about 12cm and the need to be able to carry a sensor on a rotatable arm were challenging.

The result was a pure Radio Control (RC) solution, using an existing robot chasis, the [Rover 5 Robot Platform](https://www.sparkfun.com/products/10336).

Using this solution, the QA process was reduced to a few hours, while before it could take them up to two whole days. The team was rewarded with a company-wide award for their innovative solution.

# Not _Much_ to See here ;-)

Most information on this robot can be found in [a GitHub repository](https://github.com/christophevg/rover5), containing the CAD files I drew to create additional laser-cut plates to assemble a mount on top of the chasis. The base files could be reused for other Rover 5 related projects.

## Features

Besides the custom mount to hold the battery packs and allow for mounting the central winch servo, to carry the inspection arm, the most notable feature are the [omni-wheels](http://www.robotshop.com/eu/en/60mm-aluminum-omni-wheel.html). These wheels have hardly any lateral friction, which makes them very well suited for tank-like movement.

In combination with a [multi-channel RC radio system](http://www.robotshop.com/eu/en/spektrum-5-channel-radio-system.html) the robot could be controlled in a very natural way, including the position of the arm, attached to the winch servo.

## Pictures & Video

{% include gallery %}

<iframe width="560" height="315" src="https://www.youtube.com/embed/7OHj70Zl4tA" frameborder="0" allowfullscreen></iframe>

