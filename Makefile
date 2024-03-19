all: update serve

update:
	bundle update

serve: assets
	bundle exec jekyll serve

MAIN_JS=assets/js/main.min.js

assets: $(MAIN_JS)

JQUERY_SRC=assets/js/vendor/jquery/*
PLUGIN_SRC=assets/js/plugins/*
CUSTOM_SRC=assets/js/custom/*

MAIN_JS_SRCS=$(JQUERY_SRC) $(PLUGIN_SRC) assets/js/_main.js $(CUSTOM_SRC)

$(MAIN_JS): $(MAIN_JS_SRCS)
	terser $^ -c > $@

clean:
	rm $(MAIN_JS)

.PHONY: assets
.PHONY: $(MAIN_JS)
