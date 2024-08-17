// import type {Config} from 'jest';

// const config: Config = {
//   verbose: true,
// };

// export default config;

// _tests_/jest.config.js
// module.exports = {
//   roots: ['<rootDir>'], // Adjust paths according to your structure
//   moduleDirectories: ['node_modules', 'src'], // Adjust if you have custom directories
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//   },
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['/node_modules/'],
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
// };

import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  resetMocks: true,
  testEnvironment: 'jsdom',  // Set to 'jsdom' for frontend tests if needed
  roots: [
    '<rootDir>/../Backend',
    '<rootDir>/../Frontend'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '../Frontend/tsconfig.json' }],
    '^.+\\.ts$': ['ts-jest', { tsconfig: '../Backend/tsconfig.json' }],
    "^.+\\.(js)$": "babel-jest",
    // "\\.[jt]sx?$": [
		// 	"babel-jest",
		// 	{
		// 		"babelrc": false,
		// 		"presets": ["@babel/preset-typescript"]
		// 	}
		// ]
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  rootDir: './'
};

export default config;

