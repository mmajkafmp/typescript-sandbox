import path from 'path';
import { appendFile } from 'fs';

export enum LogStrategyType {
  NoDate = 0,
  ToFile,
  ToConsole,
  None,
}

export default class LogStrategy {
  static getStrategyByType(strategyType: LogStrategyType) {
    const strategyMap = new Map([
      [LogStrategyType.NoDate, LogStrategy.noDate],
      [LogStrategyType.ToConsole, LogStrategy.toConsole],
      [LogStrategyType.None, LogStrategy.none],
      [LogStrategyType.ToFile, LogStrategy.toFile],
    ]);

    return strategyMap.get(strategyType);
  }

  static noDate(timestamp: string, message: string) {
    console.log(message);
  }

  static toFile(timestamp: string, message: string) {
    const filePath = path.join(__dirname, 'logs.txt');

    appendFile(filePath, `${timestamp} - ${message}\n`, (error) => {
      if (error) {
        console.log(`Error writing to ${filePath} file`);
        console.error(error);
      }
    });
  }

  static toConsole(timestamp: string, message: string) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {}
}
