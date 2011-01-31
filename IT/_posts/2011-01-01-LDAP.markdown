---
layout: post
title: LDAP Notes
---

## downloads

* [http://www.opends.org/](http://www.opends.org/)

## settings

* embedded in OpenDS 
  * user port = 50389
  * admin port = 5444
  * admin password == OpenDS password

## tools
* $OPENDS_HOME/bin/control-panel

## basic setup

{% highlight bash %}
$ cd $OPENDS_HOME

$ bin/dsconfig set-backend-prop \
               --backend-name userRoot \
               --add base-dn:dc=christophe,dc=vg \
               -p 5444 \
               --bindDN "cn=Directory Manager" 
               -w &lt;password> \
               --trustAll \
               --noPropertiesFile \
               --no-prompt

$ cat christophe.vg.ldif 
dn: dc=christophe,dc=vg
dc: christophe
objectClass: domain
objectClass: top

$ ./ldapmodify -a -p 50389 -D "cn=Directory Manager" -w &lt;password> -f christophe.vg.ldif
Processing ADD request for dc=christophe,dc=vg

$ $ cat xtof.ldif
dn: uid=xtof,dc=christophe,dc=vg
objectClass: person
objectClass: inetorgperson
objectClass: top
objectClass: organizationalperson
sn: ChristopheVG
userPassword: &lt;password>
cn: Christophe Van Ginneken
uid: cvg
givenName: Christophe

$ ./ldapmodify -a -p 50389 -D "cn=Directory Manager" -w &lt;password> -f xtof.ldif
Processing ADD request for uid=xtof,dc=christophe,dc=vg
{% endhighlight %}

## retrieve

{% highlight bash %}
$ bin/ldapsearch -p 50389 -D "cn=Directory Manager" -w &lt;password> -b "dc=christophe,dc=vg" uid=xtof dn
dn: uid=xtof,dc=christophe,dc=vg
{% endhighlight %}

## add usercertificate

{% highlight bash %}
$ cat xtof.cer | openssl enc -base64
MIID/DCCAuSgAwIBAgIQEAAAAAAA+pPQxYuiFs0BXzANBgkqhkiG9w0BAQUFADAz
MQswCQYDVQQGEwJCRTETMBEGA1UEAxMKQ2l0aXplbiBDQTEPMA0GA1UEBRMGMjAw
NzA5MB4XDTA3MDkyMDA2NTcxM1oXDTEyMDkwNTIzNTk1OVowgYgxCzAJBgNVBAYT
AkJFMTEwLwYDVQQDEyhDaHJpc3RvcGhlIFZhbiBHaW5uZWtlbiAoQXV0aGVudGlj...

$ cat xtof-cert.ldif
dn: uid=xtof,dc=christophe,dc=vg
changetype: modify
add: usercertificate
usercertificate: MIID/DCCAuSgAwIBAgIQEAAAAAAA+pPQxYuiFs0BXzANBgk
MQswCQYDVQQGEwJCRTETMBEGA1UEAxMKQ2l0aXplbiBDQTEPMA0GA1UEBRMGMjAw
NzA5MB4XDTA3MDkyMDA2NTcxM1oXDTEyMDkwNTIzNTk1OVowgYgxCzAJBgNVBAYT
AkJFMTEwLwYDVQQDEyhDaHJpc3RvcGhlIFZhbiBHaW5uZWtlbiAoQXV0aGVudGlj...

$ bin/ldapmodify -a -p 50389 -D "cn=Directory Manager" -w &lt;password> -f xtof-cert.ldif
Processing MODIFY request for uid=xtof,dc=christophe,dc=vg
MODIFY operation successful for DN uid=xtof,dc=christophe,dc=vg

$ bin/ldapsearch -p 50389 -D "cn=Directory Manager" -w &lt;password> -b "dc=christophe,dc=vg" uid=xtof
dn: uid=xtof,dc=christophe,dc=vg
objectClass: person
objectClass: organizationalperson
objectClass: inetorgperson
objectClass: top
givenName: Christophe
uid: xtof
cn: Christophe Van Ginneken
sn: ChristopheVG
userPassword: {SSHA}EVqmcoCGknLw...
userCertificate: MIID/DCCAuSgAwIBAgIQEAAAAAAA+pPQxYuiFs0BXzANBgk
MQswCQYDVQQGEwJCRTETMBEGA1UEAxMKQ2l0aXplbiBDQTEPMA0GA1UEBRMGMjAw
NzA5MB4XDTA3MDkyMDA2NTcxM1oXDTEyMDkwNTIzNTk1OVowgYgxCzAJBgNVBAYT
AkJFMTEwLwYDVQQDEyhDaHJpc3RvcGhlIFZhbiBHaW5uZWtlbiAoQXV0aGVudGlj...
{% endhighlight %}