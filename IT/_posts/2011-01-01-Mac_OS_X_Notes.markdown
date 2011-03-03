---
layout: post
title: Mac OS X Notes
---

So my PowerPC G4 got f..ked up ... Time to buy a new Mac ... with Intel this
time.

On this page I collect links to the software I install and notes on how to get
them installed the way I like. I would call this a nice overview of what to
get when you got Mac.

In the mean time, I thought that upgrading my ultra-stable Tiger install to
Leopard was a safe bet ... yeah right, it's going to take more than one big
update to reach the level of Tiger anytime soon. In the meantime I collect my
findings for [Leopard Quirks](IT/Leopard_Quirks).

So I also got me an Apple TV ... and I [patched it](IT/ATV) a bit.

## Free Software

* Growl
  [http://growl.info/](http://growl.info/)

* VLC
  [http://www.videolan.org/vlc/download-macosx.html](http://www.videolan.org/vlc/download-macosx.html)

* Windows Media Components for Quicktime
  [http://www.microsoft.com/windows/windowsmedia/player/wmcomponents.mspx](http://www.microsoft.com/windows/windowsmedia/player/wmcomponents.mspx)

* Codec voor QuickTime (so also for FrontRow == fullscreen QuickTime)
  [http://paulstamatiou.com/2006/04/08/get-front-row-to-play-xvid-divx-3ivx-videos/](http://paulstamatiou.com/2006/04/08/get-front-row-to-play-xvid-divx-3ivx-videos/)

* MySQL
  [http://dev.mysql.com/downloads/mysql/5.0.html#macosx-dmg](http://dev.mysql.com/downloads/mysql/5.0.html#macosx-dmg)

{% highlight bash %}
$ sudo /Library/StartupItems/MySQLCOM/MySQLCOM start
Starting MySQL database server
$ sudo /usr/local/mysql/bin/mysqladmin -u root password mynewpassword
{% endhighlight %}

* CocoaMySQL
  [http://cocoamysql.sourceforge.net/](http://cocoamysql.sourceforge.net/)

* PostgreSQL
  [http://www.postgresqlformac.com/](http://www.postgresqlformac.com/)

{% highlight bash %}
$ cd /Library/PostgreSQL8/
$ sudo /Library/StartupItems/PostgreSQL/PostgreSQL stop 
Stopping PostgreSQL database services
waiting for server to shut down.... done
server stopped
$ sudo /Library/StartupItems/PostgreSQL/PostgreSQL start
Starting PostgreSQL database server
server starting
{% endhighlight %}

* UnRar
  [http://www.unrarx.com/](http://www.unrarx.com/)

* Pref Pane for maintaining default applications
  [http://www.rubicode.com/Software/RCDefaultApp/](http://www.rubicode.com/Software/RCDefaultApp/)

* Inquisitor - Spotlight for the web
  [http://www.inquisitorx.com/safari/](http://www.inquisitorx.com/safari/)

* Safariblock
  [http://fsbsoftware.com/SafariBlock.html](http://fsbsoftware.com/SafariBlock.html)

* PDF Split and Merge
  [http://www.pdfsam.org](http://www.pdfsam.org)

* Git installer
  [http://code.google.com/p/git-osx-installer/downloads/list](http://code.google.com/p/git-osx-installer/downloads/list)

* GitX
  [http://gitx.frim.nl/](http://gitx.frim.nl/)

* Git TextMate bundle
  [http://github.com/jcf/git-tmbundle](http://github.com/jcf/git-tmbundle)

## MacPorts

* MacPorts
  [http://www.macports.org/](http://www.macports.org/)

## Software worth paying for

* Parallels Desktop
  [http://www.parallels.com/download/desktop/](http://www.parallels.com/download/desktop/)

## Win XP on Mac

* Theme Win XP to look like
  [http://osx.portraitofakite.com/](http://osx.portraitofakite.com/)

## Taking Screenshots

from : [http://www.macdevcenter.com/pub/a/mac/2003/02/28/screenshot.html](http://www.macdevcenter.com/pub/a/mac/2003/02/28/screenshot.html)

* use grab (installed by default)

* Screenshot Plus
[http://www.apple.com/downloads/dashboard/business/screenshotplus.html](http://www.apple.com/downloads/dashboard/business/screenshotplus.html)

from [http://www.macwrite.com/critical-mass/taking-screenshots-mac-os-x](http://www.macwrite.com/critical-mass/taking-screenshots-mac-os-x)

* cmd+shift+4+space

is a build in solution that generates a shot of a window (including the
shadow) on the desktop. It seems that Leopard has changed the format from pdf
to png.

## Configuration

* connect to MSN and/or other M$ IM services
[http://allforces.com/2005/05/06/ichat-to-msn-through-jabber/](http://allforces.com/2005/05/06/ichat-to-msn-through-jabber/)

## Root Account

from [http://www.spy-hill.com/~myers/help/apple/EnableRoot.html](http://www.spy-hill.com/~myers/help/apple/EnableRoot.html)

* use NetInfo Manager to reset the root password
* su to root and set new password using the passwd command
