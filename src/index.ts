import runPrototype from './design-patterns/creational-prototype';
import runFactory from './design-patterns/creational-factory';
import runBuilder from './design-patterns/creational-builder';
import runDecorator from './design-patterns/structural-decorator';
import runComposite from './design-patterns/structural-composite';
import runChainOfResponsibility from './design-patterns/behavioral-chain-of-responsibility';
import runStrategy from './design-patterns/behavioral-strategy';

const designPatters = [
  runPrototype,
  runFactory,
  runBuilder,
  runDecorator,
  runComposite,
  runChainOfResponsibility,
  runStrategy,
];

const argv = process.argv.splice(2)[0];

if (argv) {
  const argvLowerCase = argv.toLocaleLowerCase();

  if (argvLowerCase === 'list') {
    console.log('\nAVAILABLE DESIGN PATTERNS\n');

    designPatters.forEach((dp) =>
      console.log(`* ${dp.name.replace('run', '')}`),
    );
    process.exit(0);
  }

  const wantedPatternDelegate = designPatters.find((dp) => {
    const funcName = dp.name.toLocaleLowerCase();

    return funcName.includes(argvLowerCase);
  });

  if (wantedPatternDelegate) {
    wantedPatternDelegate();
    process.exit(0);
  }
}

designPatters.forEach((dp) => dp());
