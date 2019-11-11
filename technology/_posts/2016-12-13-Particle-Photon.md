---
title: Particle Photon
header:
  teaser: /technology/images/thumb/photon.jpeg
  image: /technology/images/header/photon.jpeg
---

For hardware prototyping work, Arduino offers a very quick path to something functionally complete. There are very nice version, like the Uno and Micro, but one has really emerged as my preferred platform: the [Particle Photon](https://www.particle.io/products/hardware/photon-wifi-dev-kit).

This page is a collection of notes and links I keep to all great online resources, offered by Particle.

* [CLI](https://docs.particle.io/guide/tools-and-features/cli/photon/)
* [Upgrading Firmware](https://docs.particle.io/support/troubleshooting/firmware-upgrades/core/)
* [Troubleshooting Tools](https://docs.particle.io/support/troubleshooting/troubleshooting-tools/photon/)
* Blinking Cyan with Red flashes: try: `particle keys doctor <id>`
* Kind of factory reset:

```bash
$ npm update -g particle-cli
# place Photon in DFU-mode
$ particle update
# place Photon in DFU-mode
$ particle flash --usb tinker
# hold on to the SETUP button until the device blinks blue
# release SETUP button and press and hold until it blinks blue rapidly to clear wifi credentials
$ particle serial wifi # to setup Wifi credentials
```
