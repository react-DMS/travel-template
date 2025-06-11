module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@config': './app/config',
            '@components': './app/components',
            '@assets': './app/assets',
            '@utils': './app/utils',
            '@data': './app/data',
            'app': './app', 
            '@actions': './app/actions',
            '@screens': './app/screens',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
