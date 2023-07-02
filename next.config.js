/** @type {import('next').NextConfig} */

const path = require('path');

console.log(__dirname)

const { DefinePlugin } = require('webpack');

// Git version
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin({
  lightweightTags: true,
});

const gitVersion = (() => {
  try {
    return JSON.stringify(gitRevisionPlugin.version());
  } catch (e) {
    return JSON.stringify(require('./package.json').version);
  }
})();

// Linting SCSS

// const StylelintPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins = config.plugins.concat([
      new DefinePlugin({
        __VERSION__: JSON.stringify(require('./package.json').version),
        __GIT_VERSION__: gitVersion,
        __BUILD_TIME__: new Date().getTime(),
        __BUILD_ID__: buildId,
      }),
      // new StylelintPlugin()
    ]);
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
