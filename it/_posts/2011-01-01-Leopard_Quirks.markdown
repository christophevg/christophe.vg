---
layout: post
title: Leopard Quirks
---

## Airport

It seems that the airport implementation is pretty fucked up. Up to the
upgrade I had a super-stable connection all over our place. Now, with Leopard
my airport connection sometimes just drops. Especially under a higher number
of connections, luckly there's cat5 everywhere ;-)

No solution yet :-(

# Subversion, Perl, ...

I'm not even gonna look into this one, but if you see errors messages when
using subversion, perl, ruby, ... like the following:

{% highlight bash %}
 $ svn
 svn: error: cannot set LC_ALL locale
 svn: error: environment variable LANG is UTF-8
 svn: error: please check that your locale name is correct
{% endhighlight %}

you can solve it by explicitly adding the missing env variable to your .profile

{% highlight bash %}
 $ cd
 $ cat .profile 
 export LC_CTYPE=en_US.UTF-8
 export LC_ALL=en_US.UTF-8
 $ . .profile
 $ svn
 Type 'svn help' for usage.
{% endhighlight %}

## Apache

Apache has been upgraded to Apache 2.2.  

### Users

But the migration tools don't do a good job in copying the users' configs. 

Quick solution:

{% highlight bash %}
 $ sudo cp /private/etc/httpd/users/* /private/etc/apache2/users/
{% endhighlight %}

### Modules

I use PostgreSQL, so PHP without it is pretty useless. Some idiot @ Apple
seems to have his head backwards the day he had to add the new Apache setup.
It contains close to no modules. It seems that the only solution to get a
decent set of modules is to compile a fresh apache2 and php module. now,
that's been a while ;-)

Okay, so let's get apache2 and PHP sources, unpack and get compiling ...

{% highlight bash %}
  $ cd httpd-2.2.8
  $ ./configure --enable-layout=Darwin --enable-mods-shared=all
    ...
  $ make && sudo make install
    ...
  $ cd php-5.2.6
  $ ./configure --with-pgsql=/Library/PostgreSQL8/ --without-pear --with-apxs2 --enable-soap
    ...
  $ make && sudo make install
 ...
{% endhighlight %}

And that puts us back in control ;-) Solved!

And [Snow Leopard](IT/Snow_Leopard_Quirks) off course introduces a few new quirks.
