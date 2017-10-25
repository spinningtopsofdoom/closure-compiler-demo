# Google Closure Compiler, TypeScript, and React Demo

A demonstration of compiling a [TypeScript](http://typescriptlang.org/) and [React](https://reactjs.org/) "Hello World" web page with [Google Closure Compiler](https://developers.google.com/closure/compiler/)

# JavaScript Setup

This project uses [yarn](https://yarnpkg.com/) to manage JavaScript Dependencies

Install the JavaScript dependencies with `yarn install`

All build steps use the [`yarn run`](https://yarnpkg.com/docs/cli/run/) command

Run `yarn run build-ts` to compile the TypeScript. The compiled JavaScript is put into the `src/build-react` folder.

# Running the server

`yarn run server-start` Runs a static server at [localhost:8080](localhost:8080)

# Compiling with Google Closure Compiler

Google Closure Compiler has a way to pass in files containing parameters which are called **Flag Files**

All **Flag Files** are in [`src/closure`](./src/closure). Each flag file is prefixed with the step number, like `02-<flag file descriptive name>`.

I've created two types of compilation for Google Closure Compiler, normal mode and debug mode. In debug mode the [name mangling](https://en.wikipedia.org/wiki/Name_mangling) is toned down and the compiled output is pretty printed. This makes the compiled JavaScript much easier to read when there is an error or bug in the JavaScript application.

Google Closure Compiler puts the compiler JavaScript into the `dist` folder.

## Final Result

These commands run the Google Closure Compiler showing the final

`yarn run build-gcc-debug` compiles the Hello World app.
`yarn run build-gcc-dev-debug -- --flagfile <flag file name>` compiles the Hello World app in debug mode.

## Step by Step results

`yarn run build-gcc-dev -- --flagfile <flag file name>` runs Google Closure Compiler with the specified step flag file.
* Example `yarn run build-gcc-dev -- --flagfile ./src/closure/10-dependency-management.conf`

`yarn run build-gcc-dev-debug -- --flagfile <flag file name>` runs Google Closure Compiler with the specified step flag file in debug mode.
* Example `yarn run build-gcc-dev-debug -- --flagfile ./src/closure/08-dependency-management.conf`

# Running the Presentation

Install the showoff gem with
* `bundle install`

Run the showoff presentation
* `showoff serve`

Navigate to localhost:9090

# License

Copyright © 2017 Peter Schuck

Distributed under the MIT License.
