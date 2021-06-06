// This configuration is used for IDE completion with the babel-plugin-module-resolver plugin
import System from '@jest/fake-timers/build/legacyFakeTimers'

System.config({
  paths: {
    '@/*': './src/*',
  },
})
