#!/bin/bash

# rebase gh-pages based on master and push all

git checkout master
git push github master

git checkout gh-pages
git rebase master
git push github gh-pages

git checkout master
