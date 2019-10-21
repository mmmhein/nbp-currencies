# Getting started

A few easy steps to set up a project:

* Make sure you've got **Node** installed, preferably version above **10**
* Run `npm install` from project root

Most useful scripts for development:

* `npm start` - starts the project in a development mode
* `npm test` - fires up Jest test runner

Other scripts which could be helpful:

* `npm run start:build` -  starts a production version of app locally
* `npm run test:ci` - fires up Jest test runner with code coverage
* `npm run test:update` - updates all tests' snapshots from scratch
* `npm run format` - formats whole codebase with prettier

### ⚙️ Solutions ⚙️
List of proven, backed by big communities solutions, which help to deliver **high-quality** code without too much friction:
* [Create-react-app](https://github.com/facebook/create-react-app)
* [Jest](https://jestjs.io/) as automated unit test runner
  * unit tests collocated with components
* Application styled with [styled-components](https://www.styled-components.com/)
  * each component has it's own isolated style
  * compose components not styles -- prevents huge amount of duplication in large codebases
* Automatic code formatting with [prettier](https://prettier.io/)
  * no more arguments such as tabs vs spaces, single quotes vs double, etc.
  * more pleasant to work with codebase
* [Eslint](https://eslint.org/)

### :loudspeaker: Overview

App is fully responsive, different layout for desktop and phone. Tested on newest Chrome.
