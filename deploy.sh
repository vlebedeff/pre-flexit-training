git checkout dev
git branch -D gh-pages
git checkout -b gh-pages dev
npm install react react-dom
webpack
git add node_modules/react/dist/react.js -f
git add node_modules/react-dom/dist/react-dom.js -f
git add dist/bundle.js -f
git add dist/bundle.css -f
git commit -m "Add ignored files required for demo"
git push origin gh-pages -f
git checkout dev
