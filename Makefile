
#
# Path
#

SHELL:=/bin/bash
PATH:=./node_modules/.bin:$(PATH)


#
# Sources
#

SRC:=$(shell find -E lib -regex '^.*(html|js|css)$$')


#
# Targets
#

all: build

build: node_modules $(SRC)
	mkdir -p $@
	atomify --output $@/$@
	@echo ""
	@echo "    task-view was built!"
	@echo ""

node_modules: package.json
	npm install

test: build
	open test/index.html

clean:
	rm -fr build

.PHONY: clean test

