import LogStrategy from './log-strategy';
import LogStrategyType from './log-strategy-type';

class Logger {
  logs: { message: string; timestamp: string }[];
  strategy: (timestamp: string, message: string) => void;
  version: string;

  constructor() {
    this.logs = [];
    this.strategy = LogStrategy.toConsole;

    // For singleton testing
    const timestamp = new Date().getTime().toString();
    const randomNumber = Math.floor(Math.random() * Math.floor(1000));
    this.version = `${timestamp}-${randomNumber}`;
  }

  get count(): number {
    return this.logs.length;
  }

  get currentVersion(): string {
    return this.version;
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

// Export the logger as a Singleton instance
export default new Logger();
