---
title: Homebridge Notes
header:
  teaser: /technology/images/thumb/homebridge.png
  image: /technology/images/header/homebridge.png
---

These are my notes on installing Homebridge, connecting it to Apple's Home apps and integrating Niko Home Control, (Siemens) Home Connect and Logitec Harmony (Hub)

## Homebridge

Prepare node execution environment:

```bash
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
$ sudo apt-get install -y nodejs gcc g++ make python
$ node -v
v12.18.3
$ sudo npm install -g npm
```

Install Homebridge:

```bash
$ sudo npm install -g --unsafe-perm homebridge homebridge-config-ui-x
$ sudo hb-service install --user homebridge
```

On MacOS (e.g. for development purposes):

```bash
$ brew install node
$ npm install -g homebridge homebridge-config-ui-x
```

Create a local instance folder and add a `config.json`:

```bash
$ mkdir homebridge-dev
```

```json
{
    "bridge": {
      "name": "Homebridge Dev",
      "username": "CC:22:3D:E3:CE:30",
      "port": 51262,
      "pin": "031-45-154"
    },
    "accessories": [],
    "platforms": [
        {
            "name": "Config",
            "port": 8581,
            "platform": "config",
            "log": {
              "method": "file",
              "path": "homebridge.log"
            }
        }
    ]
}
```

```bash
$ homebridge -D -U ./homebridge-dev > homebridge-dev/homebridge.log
```

And visit [http://localhost:8581](http://localhost:8581).

## Niko Home Control

Install Niko Home Control Plugin from [https://github.com/openhomekit/homebridge-nhc2](https://github.com/openhomekit/homebridge-nhc2)

```bash
$ sudo npm install -g @openhomekit/homebridge-nhc2
```

Using [https://mynikohomecontrol.niko.eu/](https://mynikohomecontrol.niko.eu/) add the Niko Hobby API and obtain the password formatted as a JWT token.

Edit Homebrigde configuration:

```json
"platforms": [
    {
      "platform" : "NHC2",
      "name" : "NHC2",
      "host": "FP<mac address>.local",
      "password": "<obtained password from Niko>"
    }
  ]
```

For development, clone a fork of []() and link it to the development instance of homebridge:

```bash
$ git clone git@github.com:christophevg/homebridge-nhc2.git

$ cd homebridge-nhc2
kibo:homebridge-nhc2 xtof$ npm link

> homebridge-nhc2@1.2.1 prepare /Users/xtof/Workspace/homebridge/homebridge-nhc2
> npm run build


> homebridge-nhc2@1.2.1 build /Users/xtof/Workspace/homebridge/homebridge-nhc2
> rimraf ./dist && tsc

added 176 packages from 184 contributors and audited 177 packages in 7.103s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

/usr/local/lib/node_modules/homebridge-nhc2 -> /Users/xtof/Workspace/homebridge/homebridge-nhc2
```

Add the same configuration as above, and run Homebridge _in insecure mode_:

```bash
$ homebridge -D -I -U ./homebridge-dev > homebridge-dev/homebridge.log
```

After editing the TypeScript sources, rebuild them using:

```bash
$ npm run-script build
```

## Siemens Home Connect

Setup using the default Home Connect app.

Visit [https://developer.home-connect.com/user/register](https://developer.home-connect.com/user/register) to setup a developer account and register a new application at [https://developer.home-connect.com/applications/add](https://developer.home-connect.com/applications/add) with "device flow".

Copy the `ClientId` into the Homebridge configuration:

```json
"platforms": [
    {
      "platform": "HomeConnect",
      "clientid": "<obtained client id from home connect>"
    }
  ]
```

Install the Home Connect plugin:

```json
$ sudo npm install -g homebridge-homeconnect
```

## Logitec Harmony

```bash
$ sudo npm install --unsafe-perm -g homebridge-harmony
```

```json
"platforms": [
    {
      "platform": "HarmonyHubWebSocket",
      "cleanCache": true,
      "TVAccessory": false,
      "switchAccessories": true
    }
  ]
```

## References

* [https://github.com/homebridge/homebridge/wiki/Install-Homebridge-on-Raspbian](https://github.com/homebridge/homebridge/wiki/Install-Homebridge-on-Raspbian)
* [https://medium.com/@woutervanvlaenderen/controlling-niko-home-control-2-through-apple-homekit-e902d241b5ca](https://medium.com/@woutervanvlaenderen/controlling-niko-home-control-2-through-apple-homekit-e902d241b5ca)

* [https://github.com/thoukydides/homebridge-homeconnect](https://github.com/thoukydides/homebridge-homeconnect)

* [https://github.com/nicoduj/homebridge-harmony](https://github.com/nicoduj/homebridge-harmony)