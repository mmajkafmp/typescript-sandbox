module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['cobertura', 'text', 'lcov', 'clover'],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
};
