module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/unitTest/**/**.test.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  collectCoverageFrom: [
    '*/.{tsx,jsx}',
    '*/.{ts,js}',
    '!**/*index.ts',
    '!env/index.ts',
    '!env/index.ts',
    '!*/node_modules/*',
    '!*/build/*',
    '!*/dist/*',
    '!*/coverage/*',
    '!*/.config.js',
    '!*/.d.{ts,js}',
    '!**/*rc.js'
  ]
}