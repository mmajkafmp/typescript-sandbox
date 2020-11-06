import { LogStrategyType } from './log-strategy';
import logger from './logger';

export const run = () => {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - STRATEGY\n');

  logger.log('Hello 1');
  logger.log('Hello 2');
  logger.log('Hello 3');

  logger.changeStrategy(LogStrategyType.ToFile);

  logger.log('Hello 4');
  logger.log('Hello 5');
  logger.log('Hello 6');
};
