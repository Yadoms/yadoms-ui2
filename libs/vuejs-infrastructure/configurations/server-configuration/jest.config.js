module.exports = {
  displayName: 'vuejs-infrastructure-configurations-server-configuration',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory:
    '../../../../coverage/libs/vuejs-infrastructure/configurations/server-configuration',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig:
        'libs/vuejs-infrastructure/configurations/server-configuration/tsconfig.spec.json',
    },
  },
};
