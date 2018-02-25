# Lerna TypeScript Jest boilerplate

[![License](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/bunch-of-friends/lerna-typescript-jest-boilerplate/blob/master/LICENSE)
[![CircleCI](https://circleci.com/gh/bunch-of-friends/lerna-typescript-jest-boilerplate.svg?style=svg)](https://circleci.com/gh/bunch-of-friends/lerna-typescript-jest-boilerplate)

Boilerplate template of a monorepo setup using [Lerna](https://github.com/lerna/lerna/), [TypeScript](https://github.com/microsoft/typescript) and [Jest](https://github.com/facebook/jest).

## How to use
Copy/clone/fork this repo and use it as a boilerplate for your project.

## Commands

`npm run bootstrap`
Installs Lerna, all dependencies and links packages within the repo as needed

`npm run reset`
Deletes all buid artifacts, node_modules and runs bootstrap

`npm run test`
Runs tests in all packages

`npm run build`
Cleans all build artifacts and runs build in all packages

`npm run build:watch`
Watch mode of the above

`npm run cleanup`
Cleans build artifacts

`npm run demo`
Runs the demo app (delete this command if you don't want to use a demo app)

`npm run lint`
Runs npm lint the whole repository

`npm run publish`
Rebuilds all packages and starts Lerna's publish wizard (remove the --skip-npm --skip-git arguments as needed)
