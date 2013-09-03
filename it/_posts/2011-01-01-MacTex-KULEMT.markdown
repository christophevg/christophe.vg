---
layout: post
title: MacTex and KULEMT
---

For my master thesis, I needed to get the KUL Engineering Master Thesis Class
working with MacTex. This page describes this process. It is based on the
information provided by the <tt>README</tt> file, included in the distribution.

Because I work on my beloved Mac and use TexShop to edit LaTeX files, I wanted
to work with these tools. TexShop comes with the MacTex distribution, but non
of these are mentioned in the KULEMT distribution documentation. This page was
written to confirm that everything works perfectly and shows how it is done.

Disclaimer: All credits for this work go of course to the people mentioned in
all documents.

# MacTex

Download and install the latest version of MacTex from
[http://tug.org/mactex/](http://tug.org/mactex/). Mind that it's a big download
- 2.3G at the time of writing.

## LiveTex Utility

Run the LiveTex Utility and update all packages.

# KUL Engineering Master Thesis Class

Download the KULEMT class distribution from
[ftp://ftp.esat.kuleuven.be/latex/kulemt/](ftp://ftp.esat.kuleuven.be/latex/kule
mt/). You can log in as a guest user.

Next follow the instructions in the <tt>README</tt> file.

## Memoir.cls

The KULEMT template requires the memoir class. The README provides a command
for this, but you can do this from the LiveTex utility.

## Installing the KUEMT class

The README provides steps to do this. I here follow the instruction to do a
system-wide installation. Adapting these to the instructions in the README for
an installation only for the current user is straightforward.

NOTE: Older installers (version 2011) did not correctly change the <tt>PATH</tt>
variable. The <tt>kpsewhich</tt> and other commands were not found.

{% highlight console %}
$ ROOT=`kpsewhich -expand-var='$TEXMFHOME'`
-bash: kpsewhich: command not found
{% endhighlight %}

To fix this, edit your <tt>~/.profile</tt> and add the following line:

{% highlight console %}
export PATH=$PATH:/usr/texbin
{% endhighlight %}

Now reload your shell or re-source <tt>~/.profile</tt>:

{% highlight console %}
$ cd
$ . .profile
{% endhighlight %}

Now you're ready to go ...

{% highlight console %}
$ ROOT=`kpsewhich -expand-var='$TEXMFHOME'`
$ mkdir -p "$ROOT"
$ unzip -qd "$ROOT" report/template/kulemt-tds.zip 
$ mktexlsr "$ROOT"
mktexlsr: Updating /Users/xtof/Library/texmf/ls-R... 
mktexlsr: Done.
{% endhighlight %}

# Using the Provided Template

After installing the KULEMT class, we can use the provided template to
kick-start our own work.

{% highlight console %}
$ cd thesis
$ cp "$ROOT/doc/latex/kulemt/sjabloon/"* .
$ ls -l
total 616
-rw-r--r--@ 1 xtof  staff     653 Sep  3 12:37 app-A.tex
-rw-r--r--@ 1 xtof  staff     463 Sep  3 12:37 app-n.tex
-rw-r--r--@ 1 xtof  staff     366 Sep  3 12:37 besluit.tex
-rw-r--r--@ 1 xtof  staff    1594 Sep  3 12:37 hfdst-1.tex
-rw-r--r--@ 1 xtof  staff    7893 Sep  3 12:37 hfdst-2.tex
-rw-r--r--@ 1 xtof  staff    1132 Sep  3 12:37 hfdst-n.tex
-rw-r--r--@ 1 xtof  staff     446 Sep  3 12:37 inleiding.tex
-rwx------@ 1 xtof  staff  272481 Sep  3 12:37 masterproef.pdf
-rw-r--r--@ 1 xtof  staff    3600 Sep  3 12:37 masterproef.tex
-rw-r--r--@ 1 xtof  staff     678 Sep  3 12:37 referenties.bib
{% endhighlight %}

## TexShop

Now open <tt>masterproef.tex</tt> in TexShop and typeset it. This will result
in an almost exact copy of the provided example <tt>masterproef.pdf</tt>. Two
things are still not okay:

* the table of contents and other lists (of figures, tables,...)
* the bibliography is missing (page 19)

The former is easily fixed by typesetting the document again. LaTeX requires
multiple passes to generate these.

The latter, requires first processing of the BibTeX sources. To do this, select
BibTeX from the drop down next to the <tt>Typeset</tt> button - it will
normally show <tt>LaTeX</tt>. Now typeset again, switch back to <tt>LaTeX</tt>
and typeset again. Et voila, the bibliography is also rendered.

Compare it to the provided <tt>masterproef.pdf</tt> and then start customizing
the template.
