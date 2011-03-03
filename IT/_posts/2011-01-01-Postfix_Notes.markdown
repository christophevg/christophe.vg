---
layout: post
title: Postfix Notes
---

{% highlight bash %}
# Virtual Mailboxes via MySQL configuration
virtual_mailbox_domains = mysql:/etc/postfix/mysql_virtual_domains.cf
virtual_mailbox_maps = mysql:/etc/postfix/mysql_virtual_mailboxes.cf
virtual_alias_maps = mysql:/etc/postfix/mysql_virtual_alias_maps.cf
virtual_mailbox_base = /
virtual_uid_maps = mysql:/etc/postfix/mysql_virtual_uid_maps.cf
virtual_gid_maps = mysql:/etc/postfix/mysql_virtual_gid_maps.cf
 
# RBL blocking
maps_rbl_domains =
      zen.spamhaus.org
      bl.spamcop.net

smtpd_client_restrictions =
      reject_rbl_client zen.spamhaus.org
      reject_rbl_client bl.spamcop.net

# other SPAM filtering
# valid HELO required
smtpd_require_helo = yes
smtpd_helo_restrictions = reject_invalid_hostname,reject_unknown_hostname
{% endhighlight %}
