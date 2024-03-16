---
title: MongoDB Notes
header:
  teaser: /technology/images/thumb/mongo.png
  image: /technology/images/header/mongo.png
---

My notes on installing, running and using MongoDB

# Install and Basic Setup

```bash
$ brew install mongodb
...
To have launchd start mongodb now and restart at login:
  brew services start mongodb
...
```

```mongodb
> use admin
switched to db admin
> db.createUser(
...   {
...     user: "admin",
...     pwd: "admin",
...     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...   }
... )
Successfully added user: {
	"user" : "admin",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}
```

Edit `/usr/local/etc/mongod.conf` and add:

```
security:
  authorization: enabled
```

Restart using:
```
$ launchctl stop homebrew.mxcl.mongodb
$ launchctl start homebrew.mxcl.mongodb
```

Create new database + user:

```mongodb
> use admin
switched to db admin
> db.auth("admin", "admin" )
> use project
switched to db project
> db.createUser(
...   {
...     user: "c3po",
...     pwd: "c3po",
...     roles: [ { role: "readWrite", db: "c3po" } ]
...   }
...)
Successfully added user: {
	"user" : "c3po",
	"roles" : [
		{
			"role" : "readWrite",
			"db" : "c3po"
		}
	]
}
...
> use c3po
switched to db c3po
> db.auth("c3po", "c3po")
1
```



References:
* [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [https://docs.mongodb.com/manual/tutorial/enable-authentication/](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
* [https://serverfault.com/questions/690284/mongodb-config-file-option-for-authentication](https://serverfault.com/questions/690284/mongodb-config-file-option-for-authentication)
* [http://stackoverflow.com/questions/8495293/whats-a-clean-way-to-stop-mongod-on-mac-os-x](http://stackoverflow.com/questions/8495293/whats-a-clean-way-to-stop-mongod-on-mac-os-x)
