---
layout: post
title: MySQL Notes
---

## Installation

* download installer from [http://dev.mysql.com/downloads/mysql/](http://dev.mysql.com/downloads/mysql/)
* see also: [http://dev.mysql.com/doc/refman/5.0/en/mac-os-x-installation.html](http://dev.mysql.com/doc/refman/5.0/en/mac-os-x-installation.html)

## Start/Stop

{% highlight bash %}
$ sudo /Library/StartupItems/MySQLCOM/MySQLCOM start

$ sudo /Library/StartupItems/MySQLCOM/MySQLCOM stop
{% endhighlight %}

## Snow Leopard / Lion

After upgrading to Snow Leopard or Lion, `/usr/local/mysql` doesn't exist anymore, resulting in a failure when starting the server:

{% highlight bash %}
$ sudo /Library/StartupItems/MySQLCOM/MySQLCOM start
Password:
Could not find MySQL startup script!
{% endhighlight %}

Simply creating a symlink from the MySQL installation directory to `/usr/local/mysql` solves the problem:

{% highlight bash %}
$ cd /usr/local/

$ sudo ln -s mysql-6.0.7-alpha-osx10.5-x86_64 mysql

$ sudo /Library/StartupItems/MySQLCOM/MySQLCOM start
Starting MySQL database server
{% endhighlight %}

## Create Users

{% highlight bash %}
$ mysql -uroot mysql
mysql> GRANT USAGE ON *.* TO 'username'@'localhost'; 
Query OK, 0 rows affected (0.19 sec)

mysql> DROP USER 'username'@'localhost';
Query OK, 0 rows affected (0.05 sec)

mysql> CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
Query OK, 0 rows affected (0.00 sec)
{% endhighlight %}

NOTE: above is a trick to recreate users (DROP USER IF EXISTS doesn't ... exist)

## Create Database

{% highlight bash %}
$ mysql -uroot mysql
mysql> DROP DATABASE IF EXISTS db;
Query OK, 0 rows affected (0.46 sec)

mysql> CREATE DATABASE db;
Query OK, 1 row affected (0.00 sec)
{% endhighlight %}

## Grant Access

{% highlight bash %}
$ mysql -uroot mysql
mysql> GRANT ALL PRIVILEGES ON db.* TO 'username'@'localhost';
Query OK, 0 rows affected (0.05 sec)
{% endhighlight %}
