module.exports = async () => ({
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/**/index.js',
  ],
  verbose: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
  ],
  mapCoverage: true,

})
