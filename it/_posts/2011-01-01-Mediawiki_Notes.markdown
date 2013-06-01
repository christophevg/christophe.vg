---
layout: post
title: Mediawiki Notes
---

## remove index.php

{% highlight xml %}
<Directory /home/wiki>
   Options FollowSymLinks
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.+)$ /index.php?title=$1 [L,QSA]
</Directory>
{% endhighlight %}

{% highlight php %}
$wgArticlePath = "$wgScriptPath/$1";
{% endhighlight %}

## clear cache

{% highlight sql %}
 TRUNCATE TABLE objectcache;
{% endhighlight %}

## a private wiki

{% highlight php %}
$wgGroupPermissions['*'    ]['createaccount']   = false;
$wgGroupPermissions['*'    ]['read']            = false;
$wgGroupPermissions['*'    ]['edit']            = false;

$wgWhitelistRead = array( "Main Page", "Special:Userlogin" );
{% endhighlight %}

## links ##

* [http://meta.wikimedia.org/wiki/Help:Contents#For_editors](http://meta.wikimedia.org/wiki/Help:Contents#For_editors)
* [http://meta.wikimedia.org/wiki/Using_a_very_short_URL](http://meta.wikimedia.org/wiki/Using_a_very_short_URL)
