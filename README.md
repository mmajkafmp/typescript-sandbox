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

* Creational
  * [Singleton](src/design-patterns/behavioral-strategy/SINGLETON.md)
  * [Protoype](src/design-patterns/creational-prototype/README.md)
  * [Factory](src/design-patterns/creational-factory/README.md)
  * [Builder](src/design-patterns/creational-builder/README.md)
* Structural
  * [Adapter](src/design-patterns/structural-adapter/README.md)
  * [Proxy](src/design-patterns/structural-proxy/README.md)
  * [Composite](src/design-patterns/structural-composite/README.md)
  * [Decorator](src/design-patterns/structural-decorator/README.md)
* Behavioral
  * [Chain of Responsibility](src/design-patterns/behavioral-chain-of-responsibility/README.md)
  * [Command](src/design-patterns/behavioral-command/README.md)
  * [Iterator](src/design-patterns/behavioral-iterator/README.md)
  * [Observer](src/design-patterns/behavioral-observer/README.md)

Tutorials and recommended reading used:

* [Node.js Design Patterns](https://www.linkedin.com/learning/node-js-design-patterns/)
* [TypeScript Essential Training](https://www.linkedin.com/learning/typescript-essential-training)
* [Gang of Four Design Patterns in C#](http://www.blackwasp.co.uk/gofpatterns.aspx)

## Feedback

Feel free to raise issues and comment on the code. 
I'm curious to know if this code can look better!
