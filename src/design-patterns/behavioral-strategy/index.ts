import LogStrategyType from './log-strategy-type';
import logger from './logger';
import singletonLoggerTest from './logger';

export default function runStrategy() {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - STRATEGY\n');

  console.log(`Logger version: ${logger.currentVersion}`);
  console.log(
    `Logger singleton test version: ${singletonLoggerTest.currentVersion}\n`,
  );

  logger.log('Hello 1');
  logger.log('Hello 2');
  logger.log('Hello 3');

  logger.changeStrategy(LogStrategyType.NoDate);

  logger.log('Hello 4');
  logger.log('Hello 5');
  logger.log('Hello 6');

  logger.changeStrategy(LogStrategyType.ToFile);

  logger.log('Hello 7');
  logger.log('Hello 8');
  logger.log('Hello 9');
}
