---
title: Python on Heroku
---

My notes on installing, running and using Python on Heroku

## VirtualEnv

```bash
$ brew install python3
$ pip3 install virtualenv

$ mkdir project
$ cd project
$ virtualenv my_project

$ source my_project/bin/activate
$ deactivate

$ pip freeze > requirements.txt
$ pip install -r requirements.txt
```

References:

* [http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref)

## Flask-based REST/Web Application

* add mLab MongoDB Free Sandbox

References:

* [https://spapas.github.io/2014/06/30/rest-flask-mongodb-heroku/](https://spapas.github.io/2014/06/30/rest-flask-mongodb-heroku/)

## Deploy

* install heroku cli : `brew install heroku`

```bash
$ heroku login
...
$ heroku git:remote -a project-name-on-heroku
...
$ heroku config:set MONGO_URL=mongodb://...
...
$ git push heroku master
```
