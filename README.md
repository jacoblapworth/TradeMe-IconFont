# Trade Me iconfont
[![Build Status](https://travis-ci.org/jacoblapworth/TradeMe.Tangram.IconFont.svg?branch=master)](https://travis-ci.org/jacoblapworth/TradeMe.Tangram.IconFont)

CI of iconfont for Tangram Sketch toolkit.

Icons are exported from Sketch as SVG, minified, converted to TTF font using ligatures to remap names as icons

## Creating icon release

[Fork](https://help.github.com/articles/fork-a-repo/) and clone this repo
```sh
git clone https://github.com/YOUR-USERNAME/TradeMe.Tangram.IconFont.git
cd TradeMe.Tangram.IconFont
```
Edit Sketch file in [`src/sketch/Tangram_Icons.sketch`](src/sketch/Tangram_Icons.sketch)

- Ensure paths have been converted to outlines and flattened.
- Icons should have both 24px and 16px variants.
- Add SVG as an export to the artboard.

Release a new patch (increments from e.g. 1.0.4 to 1.0.5):
```sh
yarn release
```
Release a new patch, minor, major or specific version:
```sh
yarn release minor
yarn release 1.2.3
```
Follow the instructions to commit, tag and push the changes.
This tag will trigger Travis CI to build and deploy a new release.

## Local development

Follow installation instructions of [grunt-webfont](https://github.com/sapegin/grunt-webfont) to setup local dependencies.

`ttfautohint` and `fontforge` are required to build on MacOS