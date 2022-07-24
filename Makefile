all: update serve

update:
	bundle update

serve:
	bundle exec jekyll serve
