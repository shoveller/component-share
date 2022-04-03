const path = require('path')
const withTM = require("next-transpile-modules")(["react-kit"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
        if (options.isServer) {
            config.externals = ['react', ...config.externals];
        }

        config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');

        return config
    }
}

module.exports = withTM(nextConfig)
