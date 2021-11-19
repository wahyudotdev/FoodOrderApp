module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        require.resolve('babel-plugin-resolver'),
        {
          cwd: 'babelrc',
          extension: ['.ts', '.tsx', '.js', '.jsx'],
          alias: {
            '@assets': './assets',
          },
        },
      ],
    },
  },
};
