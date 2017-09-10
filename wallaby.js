module.exports = (wallaby) => ({
  files: [
    'src/**/*.json',
    { pattern: 'test/**/*.spec.js', ignore: true },
    { pattern: 'src/**/*.spec.js', ignore: true },
    { pattern: 'src/.next/*.*', ignore: true },
    { pattern: 'src/next.config.js', ignore: true },
    { pattern: 'src/server.js', ignore: true },
    'src/**/*.js*',
    '__test__/utils/mockedStore.js',
    '__test__/utils/mockedAxios.js',
    'src/**/*.png',
    'src/**/*.svg',
    'node_modules/bytesize-icons/dist/icons/*.svg',
    'src/**/*.css',
    'src/**/*.less',
  ],

  filesWithNoCoverageCalculated: [],

  hints: {
    ignoreCoverage: /istanbul ignore next/,
  },

  tests: [
    { pattern: 'node_modules/*', ignore: true, instrument: false },
    'src/**/*.spec.js*',
    'test/**/*.spec.js*',
  ],

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },

  preprocessors: {
    '**/*.png': (file, done) => {
      done('');
    },
    '**/*.svg': (file, done) => {
      done('');
    },
  },


  setup: (target) => {
    target.testFramework.configure({
      moduleNameMapper: {
        '^.+\\.(jpg|jpeg|png|gif|svg)$': './test/utils/fileMock.js',
      },
    });
  },

  env: {
    type: 'node',
  },

  workers: {
    initial: 1,
    regular: 1,
    recycle: true,
  },

  testFramework: 'jest',
});
