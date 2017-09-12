# React-redux-nextjs-boilerplate
> This is simple application which is showing list of widgets

![Status of the build](https://circleci.com/gh/Faradey27/react-redux-nextjs-boilerplate.png?style=shield&circle-token=0994f0172044a105ab47567dc85e1cc3bc6c0f2e)
[![Coverage Status](https://coveralls.io/repos/github/Faradey27/react-redux-nextjs-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Faradey27/react-redux-nextjs-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/faradey27/react-redux-nextjs-boilerplate.svg?style=flat-square)](https://david-dm.org/faradey27/react-redux-nextjs-boilerplate)
[![devDependency Status](https://david-dm.org/faradey27/react-redux-nextjs-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/faradey27/react-redux-nextjs-boilerplate#info=devDependencies)

---

### How to use?

1. ```git clone git@github.com:Faradey27/react-redux-nextjs-boilerplate.git```
2. ```cd react-redux-nextjs-boilerplate```
3. ```npm install```
4. ```npm run dev```

##### Other commands

| command | description |
|----------|-------------|
| npm run dev | Development server with hot module replacement will start and new tab in browser will be opened  |
| npm run start | Production server will start on port 3000  |
| npm run build | Build production version of project, it will appear in src/.next folder  |
| npm run lint | To lint .js files with eslint  |
| npm run test | To run unit tests and after that - e2e tests  |
| npm run test:unit | To run only unit tests |
| npm run test:e2e | To run only e2e tests |
| npm run analyze | To run bundle analyzer on production version of build |
| npm run locales:po | To collect keys/words from components for translation and save them to .po format |
| npm run locales:json | To convert .po files to .json files, to be able to use translations inside of the app |

### Arhitecture
> Detailed explanation of decitions that was done in this application

##### Server side rendering and routing

For server side rendering, routing and other basic things we choosed [nextjs](https://github.com/zeit/next.js) which is pretty nice and fast framework for server-rendered React applications.

It also gave for us a lot of things out of the box like - styling, tonn of examples, automatic code splitting and others

##### Babel, eslint, yarn

We are using all modern features from ES6 and ES7 standarts, we also have strict rules for eslint, based on airbnb config, but much more strict. Also we are using yarn and npm5(node >= 8.4.0) for faster node_modules instalation and other performance improvments

##### Tests

This project is trying to be TDD, we are using jest, enzyme and protractor for tests both e2e, unit and integration, also we are using
page objects pattern for tests(we call it drivers)

##### Internationalisation

Currently we support en, ru and ua languages and have very flexble automated multilanguage system, so it is really easy to add new language.

There are only 3 steps to do internationalisation
1. wrap english lables with ```l('label')``` function
2. ```npm run locales:po``` and translate labels to other languages in beauty editor
3. ```npm run locales:json```

##### Data

We are using redux for data control

##### Folder structure

We are having
- components : all reusable components betweean pages should be their
- containers : redux clever components
- pages : nextjs pages, which could contain components inside
- assets : some images, languages, etc.
- utils : small helpers which we used across the app
- constants : all global constants
- data : everything related to data, like redux, api, etc.

##### About components

Each component has separate folder inside of each it has file with same as folder name, where should be main code of component + __tests__ folder + maybe some assets, sub components, etc. + index.js file just for export


