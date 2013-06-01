---
layout: post
title: TCPServer Notes
---

## Control Script ##

{% highlight bash %}
#!/bin/sh
# /etc/init.d/svscan : start or stop the svscan subsystem.
 
PATH=$PATH:/usr/local/bin:/var/qmail/bin
 
case "$1" in
  start)
      echo -n "Starting djb services: svscan"
      cd /service
      env - PATH="$PATH" svscan &
      echo $! > /var/run/svscan.pid
      echo "."
      ;;
  stop)
      echo -n "Stopping djb services: svscan"
      kill `cat /var/run/svscan.pid`
      echo -n "services "
      svc -dx /service/*
      echo -n " logging"
      svc -dx /service/*/log
      echo "."
      ;;
  restart)
      $0 stop
      $0 start
      ;;
  *)
      echo 'Usage: /etc/init.d/svscan {start|stop|restart}'
      exit 1
esac

exit 0
{% endhighlight %}

## tcprules

**/etc/tcp.smtp**

{% highlight bash %}
# localhost can relay
127.:allow,RELAYCLIENT=""

# Asia whitelist
# yahoo.com.cn
202.43.192-223.:allow,RELAYCLIENT=""
# mail.pocketemail.com.au
202.130.193.248:allow,RELAYCLIENT=""

# Asia blocklist
202-203.:allow,RBLSMTPD="-Sorry, your IP address is within a blacklisted range."
221.:allow,RBLSMTPD="-Sorry, your IP address is within a blacklisted range."
{% endhighlight %}

**compile and activate**

{% highlight bash %}
$ sudo tcprules /etc/tcp.smtp.cdb /etc/rules.tmp < /etc/tcp.smtp
{% endhighlight %}

**check**
{% highlight bash %}
$ sudo TCPREMOTEIP=202.39.1.1 tcprulescheck /etc/tcp.smtp.cdb
 
rule 202.39.1.:
set environment variable RELAYCLIENT=
allow connection
 
$ sudo TCPREMOTEIP=202.96.108.1 tcprulescheck /etc/tcp.smtp.cdb
rule 202.:
set environment variable RBLSMTPD=-Sorry, your IP address is within a blacklisted range.
allow connection
{% endhighlight %}
