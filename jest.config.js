/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
}
