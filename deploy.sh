#!/bin/sh

SCRIPTPATH=$(dirname "$0")

cd $SCRIPTPATH

git checkout dev
git branch -D gh-pages
git checkout -b gh-pages dev
npm install
webpack
git add ./node_modules/react/dist/react.js -f
git add ./node_modules/react-dom/dist/react-dom.js -f
git add ./dist/bundle.js -f
git add ./dist/bundle.css -f
rm -rf ./src
git commit -am "Add ignored files required for demo"
git push origin gh-pages -f
git checkout dev
