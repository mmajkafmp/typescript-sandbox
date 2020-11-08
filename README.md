# TypeScript Sandbox

[![Build Status](https://dev.azure.com/miroslawmajka/typescript-sandbox/_apis/build/status/miroslawmajka.typescript-sandbox?branchName=master)](https://dev.azure.com/miroslawmajka/typescript-sandbox/_build/latest?definitionId=5&branchName=master)

## Setup

Just playing about with TypeScript and see where I end up.

Install dependencies with `npm install`.

Run the entry point with `npm start`.

You can debug in VS Code using defined **Launch Program** configuration.

The `tsconfig.json` "rootDir" property must be set to `src` for the debugger breakpoints to work!

Type `npm run build` and `npm run dist` to run the distributable package as it is meant to be run in production.

Type `npm test` to run Jest unit tests.

## Design Patterns

The classic [Gang of Four](https://www.amazon.co.uk/Design-patterns-elements-reusable-object-oriented/dp/0201633612)
 design patters are the basis for the JavaScript/TypeScript design patterns in this solution.

Tutorials and recommended reading used:

* [Node.js Design Patterns](https://www.linkedin.com/learning/node-js-design-patterns/)
* [TypeScript Essential Training](https://www.linkedin.com/learning/typescript-essential-training)
* [Gang of Four Design Patterns in C#](http://www.blackwasp.co.uk/gofpatterns.aspx)

## Feedback

Feel free to raise issues and comment on the code. 
I'm curious to know if this code can look better!
