module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
}