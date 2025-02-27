module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('awesome-typescript-loader')
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader')
                }
            ]
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.alias = {
            'react-native': 'react-native-web'
        };
        return config;
    }
};
