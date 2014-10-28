
build: components index.js drawer.css 
	@component build 

components: component.json
	@component install 

clean:
	rm -fr build components 

.PHONY: clean
