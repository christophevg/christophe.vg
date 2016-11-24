---
title: PureFTPd Notes
---

## OpenBSD

{% highlight bash %}
$ cd /usr/ports/net/pure-ftpd/
$ sudo make install
{% endhighlight %}

{% highlight bash %}
/usr/local/sbin/pure-ftpd -lpuredb:/etc/pureftpd.pdb \
                          -O w3c:/var/log/pureftpd.log \
                          -U 137:026 \
                          -p 45000:50000
  
$ sudo mkdir /opt/ftp
$ sudo useradd ftpuser -d /opt/ftp
$ sudo pure-pw useradd [name] -d /opt/ftp/[name] -m -u ftpuser
{% endhighlight %}
