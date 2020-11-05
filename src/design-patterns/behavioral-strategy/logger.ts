import LogStrategy, { LogStrategyType } from './log-strategy';

class Logger {
  logs: { message: string; timestamp: string }[];
  strategy: (timestamp: string, message: string) => void;

  constructor() {
    this.logs = [];
    this.strategy = LogStrategy.toConsole;
  }

  get count(): number {
    return this.logs.length;
  }

  changeStrategy(newStrategy: LogStrategyType) {
    this.strategy = LogStrategy.getStrategyByType(newStrategy) as (
      timestamp: string,
      message: string,
    ) => void;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();

    this.logs.push({ message, timestamp });
    this.strategy(timestamp, message);
  }
}

// Singleton
export default new Logger();
