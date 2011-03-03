---
layout: post
title: AppleTV Notes
---

## Hardware

* trek voorzichtig de gummy onderkant van de ATV
* schroef de vier hoevijzen los en neem de onderplaat voorzichtig uit de behuizing
* de harde schijf zit vast tegen de onderplaat, schroef ook deze los
* monteer de harde schrijf in een behuizing en sluit aan via Firewire of USB op een Mac(Book)

## Software

### sshd

Met een sshd kunnen we verder alles vanop afstand doen:

* download OpenSSH-56.root.tar.gz
* installeer sshd

{% highlight bash %}
 $ sudo cp OpenSSH-56.root/usr/sbin/sshd /Volumes/OSBoot/usr/sbin/
 $ cp /Volumes/OSBoot/System/Library/LaunchDaemons/ssh.plist .
 $ cp ssh.plist.txt /Volumes/OSBoot/System/Library/LaunchDaemons/ssh.plist 
{% endhighlight %}

* kuis Spotlight stuff op

{% highlight bash %}
 $ sudo rm -rf /Volumes/OSBoot/.Spotlight-V100/
 $ sudo rm -rf /Volumes/Media/.Spotlight-V100/
{% endhighlight %}

* om de automatische updates te hinderen ...

{% highlight bash %}
 $ sudo echo "127.0.0.1 mesu.apple.com" >> /Volumes/OSBoot/etc/hosts
{% endhighlight %}

* monteer harde schijf terug in ATV behuizing en boot ...
* maak ssh verbinding

{% highlight bash %}
 ssh -1 frontrow@AppleTV.local
{% endhighlight %}

### DivX, Xvid, ...

* download Perian-1.0
* haal de .componenten uit de dmg en copieer ze naar de ATV

{% highlight bash %}
 $ scp -1 -r A52Codec.component/ AC3MovieImport.component/ Perian.component/  frontrow@AppleTV.local:~
{% endhighlight %}

* installeer ze op de ATV

{% highlight bash %}
 $ sudo mount -uw /
 $ sudo mv A52Codec.component/ /Library/Audio/Plug-Ins/Components/
 $ sudo mv Perian.component/ AC3MovieImport.component/ /Library/QuickTime/
{% endhighlight %}

### ATVFiles

* met ATVFiles kan je via bestanden uit ~frontrow/Movies benaderen vanuit de ATV interface
* download ATVFiles-0.5.1.run en copieer de file naar de ATV

{% highlight bash %}
 $ scp -1 ATVFiles-0.5.1.run.sh frontrow@AppleTV.local:~
{% endhighlight %}

* installeer ze

{% highlight bash %}
 $ sudo sh ATVFiles-0.5.1.run.sh
{% endhighlight %}

### Mount remote share

Dit werkt alleen nog onder de 1.0 release van de ATV. Als je de 1.1 update al hebt ... Factory reset (menu knop + volume down knop ingedrukt houden)

* make een mountpoint aan, bvb onder Movies en mount een gesharede disk 

{% highlight bash %}
 $ cd Movies
 $ mkdir Shared
 $ mount_afp afp://<user>:<passwd>@<server>/Shared/ Shared/
{% endhighlight %}

* om de share elke keer te mounten als de ATV reboot

{% highlight bash %}
 $ sudo sh
 # echo "mount_afp afp://<user>:<passwd>@<server>/Shared ~frontrow/Movies/Shared" >> /etc/rc.local
{% endhighlight %}

### Veilig upgraden naar 1.1

* download [http://mesu.apple.com/data/OS/061-2988.20070620.bHy75/2Z694-5248-45.dmg](http://mesu.apple.com/data/OS/061-2988.20070620.bHy75/2Z694-5248-45.dmg)
* copieer de dmg naar de ATV

{% highlight bash %}
 $ scp -1 ~/Downloads/2Z694-5248-45.dmg frontrow@AppleTV.local:~
{% endhighlight %}

* backup 1.0 bestanden

{% highlight bash %}
 $ mkdir ~/1.0.backup
 $ cp -p -r "/System/Library/PrivateFrameworks/Backrow.Framework" ~/1.0.backup
 $ cp -p -r "/System/Library/CoreServices/Finder.app" ~/1.0.backup
{% endhighlight %}

* extract 1.1 bestanden

{% highlight bash %}
 $ mkdir ~/1.1.files
 $ hdiutil mount 2Z694-5248-45.dmg
 $ cp -p -r "/Volumes/OSBoot 1/System/Library/PrivateFrameworks/BackRow.Framework" ~/1.1.files
 $ cp -p -r "/Volumes/OSBoot 1/System/Library/PrivateFrameworks/AppleTV.Framework" ~/1.1.files
 $ cp -p -r "/Volumes/OSBoot 1/System/Library/PrivateFrameworks/iPhotoAccess.Framework" ~/1.1.files
 $ cp -p -r "/Volumes/OSBoot 1/System/Library/CoreServices/Finder.app" ~/1.1.files
{% endhighlight %}

* installeer 1.1 bestanden

{% highlight bash %}
 $ sudo rm -r /System/Library/PrivateFrameworks/BackRow.Framework
 $ sudo rm -r /System/Library/PrivateFrameworks/iPhotoAccess.Framework
 $ sudo rm -r /System/Library/CoreServices/Finder.app
 $ sudo cp -p -r ~/1.1.files/Backrow.Framework /System/Library/PrivateFrameworks
 $ sudo cp -p -r ~/1.1.files/AppleTV.Framework /System/Library/PrivateFrameworks
 $ sudo cp -p -r ~/1.1.files/iPhotoAccess.Framework /System/Library/PrivateFrameworks
 $ sudo cp -p -r ~/1.1.files/Finder.app /System/Library/CoreServices
* reapply ATVfiles pathc op Finder.app
 $ sudo sh ATVFiles-0.5.1.run.sh
* fix sleep probleem
 $ sudo chmod u+s /System/Library/PrivateFrameworks/AppleTV.framework/Resources/SettingsHelper
 $ sudo chown root:wheel /System/Library/PrivateFrameworks/AppleTV.framework/Resources/SettingsHelper
* reboot
 $ sudo reboot
{% endhighlight %}
