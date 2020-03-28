const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escape = require('escape-string-regexp');
console.log(__dirname)
const extraNodeModules = new Proxy(
    {
      '@project/common': path.resolve(__dirname, '../../common'),
    },
    {
      get: (target, name) => {
        if (target.hasOwnProperty(name)) {
          return target[name];
        }
        return path.join(process.cwd(), `node_modules/${name}`);
      },
    },
);

const watchFolders = [
  path.resolve(__dirname, '../common'),
  path.resolve(__dirname, '../../node_modules'),
];

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    blacklistRE: blacklist([
      new RegExp(
          `^${escape(path.resolve(__dirname, '../common/node_modules/react-native'))}\\/.*$`
      ),
    ]),
    extraNodeModules,
    sourceExts: ['js', 'jsx'],
  },
  watchFolders,
};
