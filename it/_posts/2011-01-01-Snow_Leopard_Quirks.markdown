---
title: Snow Leopard Quirks
---

## PHP / PgSQL

* http://www.gnegg.ch/tag/snow-leopard/

* prior to PHP 5.3.1
  * issue with Undefined Symbol _res_9... : add -lresolv to EXTRA_LIBS in the main Makefile
  * issue with Undefined Symbol iconv : apply [patch](http://opensource.apple.com/source/apache_mod_php/apache_mod_php-53/patches/iconv.patch)
* PHP 5.3.2
  * issue with Undefined Symbol iconv : apply [patch](http://opensource.apple.com/source/apache_mod_php/apache_mod_php-53/patches/iconv.patch)
