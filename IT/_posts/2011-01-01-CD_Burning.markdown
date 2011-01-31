---
layout: post
title: CD Burning
---

## CLI

{% highlight bash %}
$ cdrecord -scanbus
$ cdrecord -v speed=16 dev=ATAPI:/dev/hdc file.iso
{% endhighlight %}
