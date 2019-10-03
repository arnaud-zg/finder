module.exports = {
  collectCoverageFrom: ['components/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  globalSetup: './jest.setup.js',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
