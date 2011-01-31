---
layout: post
title: CSharp-Mode (for Emacs)
---

## Install

Download the CSharpMode and put it in e.g. ~/emacs.d/list/. Edit your .emacs file to load the new mode.

{% highlight cl %}
;; Emacs Load Path
(setq load-path (cons "~/.emacs.d/lisp/" load-path))

;; csharp-mode
(autoload 'csharp-mode "csharp-mode" "Major mode for editing C# code." t)
(setq auto-mode-alist
    (append '(("\\.cs$" . csharp-mode)) auto-mode-alist))
{% endhighlight %}

## References

* [http://www.gnu.org/software/emacs/emacs-lisp-intro/html_node/Loading-Files.html](http://www.gnu.org/software/emacs/emacs-lisp-intro/html_node/Loading-Files.html)
* [http://www.emacswiki.org/cgi-bin/wiki/CSharpMode](http://www.emacswiki.org/cgi-bin/wiki/CSharpMode)
* [http://mfgames.com/linux/csharp-mode](http://mfgames.com/linux/csharp-mode)
