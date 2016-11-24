---
title: Mediawiki Skinning
---

<div class="thumb left" markdown="1">
[![eline.vg](images/thumb/Eline.png)](images/full/Eline.png)
</div>

This page discribes my adventures in creating a Mediawiki skin from scratch, looking at the existing skins and a lot of trail and error. The idea was to use Mediawiki as an online site-editor and not really as a wiki the way it is meant to be. 

Up to now I always used a slightly modified version of the Monobook skin. When my wife wanted to be able to edit our daughter's website, I needed to come up with a Skin that resembled the simple design I made the night our little [Eline](http://eline.vg) was born.

## Securing your Mediawiki-based website

If we want to use Mediawiki to manage a "normal" website, we off course don't want our visitors to edit the site. We need a little more control. So we need to add some additional configuration to the LocalSettings.php file:

{% highlight php %}
$wgGroupPermissions['*']['createaccount']   = false;
$wgGroupPermissions['*']['read']            = true;
$wgGroupPermissions['*']['edit']            = false;
{% endhighlight %}

Now unknown users can't create accounts, but can read and cannot edit. Don't forget to create a user before you enable these settings ;-)

## Getting started with the skin

So I installed a fresh copy of Mediawiki on my MacBook and started with a new skin called Eline. I started off with the smallest skin possible: an empty class extending the Skin class.

Okay, I must confess, I started off with even less ... an empty file, but it seems this results in an even more default skin to be used. A Mediawiki skin is a class, so let's start there ...

{% highlight php %}
<?php
  /**
   * Eline.VG MediaWiki Skin
   * Author: Christophe VG
   **/

class SkinEline extends Skin {
  
}
?>
{% endhighlight %}

The result wasn't that bad, but surely not a good start either. Mediawiki generates a lot by default.

<div class="thumb left" markdown="1">
[![step 1](images/thumb/Mediawiki_step1.png)](images/full/Mediawiki_step1.png)
</div>
<br clear="both">

## Adding our own style

Browsing through the source of the generated page I was missing the ability to apply my own style. Time to take a look at the sources of the default skins provided by the Mediawiki installation. One of the methods that were overridden was the "getStylesheet()" method. Sounds like a winner.

{% highlight php %}
<?php
  /**
   * Eline.VG MediaWiki Skin
   * Author: Christophe VG
   **/

class SkinEline extends Skin {

  function getStylesheet() {
    return 'eline/eline.css';
  }  

}
?>
{% endhighlight %}

And indeed. The result was an even less marked-up page:

<div class="thumb left clear" markdown="1">
[![step 2](images/thumb/Mediawiki_step2.png)](images/full/Mediawiki_step2.png)
</div>
<br clear="both">

## Removing Wiki Content

Ou little girl's site should not look like a classic wiki, the only thing I (read: my wife) wants is a little "login" and a little "edit" label somewhere hidden on the page. So things like  "Page history", "Printable version" "Disclaimers", "Privacy policy", ... should not be present. 

All the stuff I wanted out was placed before the real content ... So "doBeforeContent()" seems a good guess ;-)

{% highlight php %}
<?php

  /**
   * Eline.VG MediaWiki Skin
   * Author: Christophe VG
   **/

class SkinEline extends Skin {
  
  function getStylesheet() {
    return 'eline/eline.css';
  }

  function doBeforeContent() {
    return "";
  }
  
  }
?>
{% endhighlight %}

And indeed ... no more useless wiki-technical stuff on the page. 

<div class="thumb left clear" markdown="1">
[![step 3](images/thumb/Mediawiki_step3.png)](images/full/Mediawiki_step3.png)
</div>
<br clear="both">

But now we are missing some of the basic stuff we still want: an edit link.

## Re-Adding Selected Content

The first thing we find in the base Skin class is a method called "editThisPage()". It nicely returns a link, but the text is also determined by Mediwiki, and we want some control about that aspect too. So after digging a little deeper ...

{% highlight php %}
<?php

  /**
   * Eline.VG MediaWiki Skin
   * Author: Christophe VG
   **/

class SkinEline extends Skin {
  
  function getStylesheet() {
    return 'eline/eline.css';
  }

  function doBeforeContent() {
    $s .= $this->pageTitle();

    return $s;
  }

  function doAfterContent() {
    global $wgTitle;

    $s .= $this->makeKnownLinkObj( $wgTitle, 
        '<img src="../skins/eline/edit.gif">', $this->editUrlOptions() );

    return $s;
  }
  
  }

?>
{% endhighlight %}

I added a few things here: First I added the "pageTitle" again using the "pageTitle()" method in the "doBeforeContent()" method. I then found out how the "editThisPage()" method was implemented and added a slim version of that implementation to the "doAfterContent()" method. I also changed the default behaviour, where an "Edit This Page" text was displayed, and replaced it with an image placed under the new skin's own directory.

<div class="thumb left clear" markdown="1">
[![step 4](images/thumb/Mediawiki_step4.png)](images/full/Mediawiki_step4.png)
</div>
<br clear="both">

Et Voila ... we have the minimalistic result we envisaged. 

But on non-article pages the edit link should not be provided. This can be accomplished by adding a check called "isArticle()".

{% highlight php %}
<?php

  /**
   * Eline.VG MediaWiki Skin
   * Author: Christophe VG
   **/

class SkinEline extends Skin {
  
  function getStylesheet() {
    return 'eline/eline.css';
  }

  function doBeforeContent() {
    $s .= $this->pageTitle();

    return $s;
  }

  function doAfterContent() {
    global $wgTitle;

    if ( $wgOut->isArticle() ) {
      $s .= $this->makeKnownLinkObj( $wgTitle, 
				     '<div id="edit"></div>', 
				     $this->editUrlOptions() );
    }
    return $s;
  }
  
  }

?>
{% endhighlight %}

At the same time I changed the HTML part to an empty placeholding DIV, which we can style using CSS.

{% highlight css %}
#edit { 
  background: url("../../skins/eline/edit.gif") no-repeat;
  width: 55px;
  height: 17px;
}
{% endhighlight %}

## More trimming

Now would it be possible to eliminate the "edit" links that are placed next to each section ?

This has already been made possible by the Mediawiki developers in the form of a CSS class :

{% highlight css %}
.editsection { 
  display:none;
}
{% endhighlight %}
