module.exports = {
  loader: ['./.pnp.loader.mjs'],
  ignore: [
    // Never look for test files in these folders
    '.yarn/**/*',
    '**/node_modules/**/*',
  ],
  extension: ['js'],
  reporter: 'spec',
  reporterOptions: {
    configFile: 'mocha-reporter-config.json',
  },
  colors: true,
};
