all: update serve


MODEL ?= glm-5:cloud
claude:
	ollama launch claude --model ${MODEL}

update:
	bundle update

build:
	bundle exec jekyll build

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

# Image optimization
MAX_IMAGE_SIZE ?= 1200
MAX_FILE_SIZE ?= 200

check-images:
	./scripts/check-images.sh $(MAX_IMAGE_SIZE) .

fix-images:
	./scripts/fix-images.sh $(MAX_IMAGE_SIZE) .

fix-images-dry:
	DRY_RUN=1 ./scripts/fix-images.sh $(MAX_IMAGE_SIZE) .

.PHONY: assets
.PHONY: $(MAIN_JS)
.PHONY: check-images fix-images fix-images-dry
