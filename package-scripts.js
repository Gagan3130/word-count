module.exports = {
    scripts: {
      default: 'next dev',
      lint: 'next lint --fix',
      test: {
        default: 'jest --silent',
        watch: {
          script: 'jest --watch',
          description: 'run in the amazingly intelligent Jest watch mode',
        },
      },
      build: {
        default: 'next build',
      },
      start: {
        default: 'next start',
      },
      prepare: {
        default: 'husky install && next lint',
      },
      debug: "NODE_OPTIONS='--inspect' next dev",
      format: {
        default: 'prettier --write .',
        stylelint: 'stylelint-config-prettier-check',
      },
    },
  };