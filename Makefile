.PHONY: build dev clean

build:
	NEXT_PUBLIC_BASE_PATH=/rhai-nav-quickstart npm run build
	rm -rf docs
	rsync -av --exclude='*.txt' --exclude='__next*' out/ docs/
	touch docs/.nojekyll

dev:
	npm run dev

clean:
	rm -rf .next out docs
