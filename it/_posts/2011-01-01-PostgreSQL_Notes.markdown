---
title: PostgreSQL Notes
---

## OpenBSD

### Installing from OpenBSD/Ports

{% highlight bash %}
$ cd /usr/ports/databases/postgresql
$ sudo make install
{% endhighlight %}

create user, group, datastore and start server

{% highlight bash %}
$ sudo useradd -c "PostgreSQL Admin User" -g =uid -m -d /opt/pgsql \
               -s /usr/local/bin/bash -u 503 postgres
{% endhighlight %}

### Installing from Packages

{% highlight bash %}
$ sudo pkg_add postgresql-server-8.1.4.tgz
{% endhighlight %}

The package creates a user (_postgresql) with a home dir /var/postgresql.
Somehow the package did not install perfectly but with some manual work it
seemed ok afterall.

### Creating a database

{% highlight bash %}
$ su - postgres
$ mkdir /opt/pgsql/data
$ initdb -D /opt/pgsql/data
$ pg_ctl -D /opt/pgsql/data -l /opt/pgsql/log start
{% endhighlight %}

quick test

{% highlight bash %}
$ createuser test
$ createdb -U test test
$ createlang plpgsql test
$ psql -U test test
{% endhighlight %}

make sure it starts. add to rc.local"

{% highlight bash %}
# start Postgres
su - postgres -c "/usr/local/bin/pg_ctl -D /opt/pgsql/data/ \
                                        -l /opt/pgsql/log start"
{% endhighlight %}

### Mac OS X

after installing postgresql8 +server from darwinports

{% highlight bash %}
###########################################################
# A startup item has been generated that will aid in
# starting postgresql8 with launchd. It is disabled
# by default. Execute the following command to start it,
# and to cause it to launch at startup:
#
# sudo launchctl \
#   load -w /Library/LaunchDaemons/org.darwinports.postgresql8.plist
###########################################################
--->  Packaging tgz archive for postgresql8 8.1.3_0+darwin_8+server
--->  Installing postgresql8 8.1.3_0+darwin_8+server

To create a database instance, after install do
sudo mkdir -p /opt/local/var/db/pgsql8/defaultdb
sudo chown postgres8:postgres /opt/local/var/db/pgsql8/defaultdb
sudo su postgres8 -c '/opt/local/lib/pgsql8/bin/initdb \
                      -D /opt/local/var/db/pgsql8/defaultdb'

To activate the PostgreSQL8 server, add
POSTGRESQL8=-YES-
to your /opt/local/etc/rc.conf

To change the location of your database, add
POSTGRESQL8DATA=/location
to your /opt/local/etc/rc.conf

To tweak your DBMS, consider increasing kern.sysv.shmmax by adding an
increased kern.sysv.shmmax .. to /etc/sysctl.conf
{% endhighlight %}

### General

copy a database to another database

{% highlight bash %}
#!/bin/sh

SQL="${TMPDIR:=/tmp}/copy.sql.$$"

SRC=$1
TRG=$2

DUMP="pg_dump -c -O -R"
REST="psql"

# Assure the file is removed at program termination
# or after we received a signal:
trap 'rm -f "$SQL" >/dev/null 2>&1' 0
trap "exit 2" 1 2 3 13 15

${DUMP} -U ${SRC} ${SRC} > ${SQL}
${REST} -U ${TRG} -f ${SQL} ${TRG}
{% endhighlight %}

list databases on the server

{% highlight bash %}
# psql -l
{% endhighlight %}

dump a table to tab-seperated file

{% highlight bash %}
-- \f [STRING] show or set field separator for unaligned query output
-- Note, to put in a TAB in psql, you will need to quote it, and put it
-- in using Ctrl-V TAB (Ctrl-V tells the readline library to not interpret
-- the next character I think, so you can use it to insert newlines and
-- tabs etc) 

\f ' '
\a
\t
\o outputfile.txt
select .....
\o
{% endhighlight %}
