const { defaults: tsjPreset } = require('ts-jest/presets')
// const { jsWithTs: tsjPreset } = require('ts-jest/presets')
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...tsjPreset.transform,
  },
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
    },
  },
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1',
  },
}