import * as fs from 'fs';
import { resolve } from 'path';
import { loader } from 'webpack-loader-helper';
import { Configuration } from 'webpack';
import merge = require('lodash.merge');

process['traceDeprecation'] = true;

module.exports = (options: any = {}) => {
    const config1: Configuration = {
        // mode: 'production',
        mode: 'development',
        entry: './src/app.ts',
        devtool: false,
        output: {
            path: resolve('dist'),
            filename: 'app.es5.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader({ target: 'es5', module: 'commonjs' })],
                },
                {
                    test: /\.html$/,
                    use: [loader('html', { minimize: false })],
                },
                {
                    test: /es2015\.testjs$/,
                    use: [loader('raw')],
                },

            ]
        },
        stats: {
            hash: false,
            version: false,
            maxModules: 0,
            children: false,
        },

    };
    const mainConfig: Configuration = merge({}, config1, {
        entry: './src/main.ts',
        output: {
            filename: 'main.js',
        },
    });
    const config2: Configuration = merge({}, config1, {
        output: {
            filename: 'app.es2015.js',
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader({ target: 'es2015', module: 'es2015' })],
                },
            ]
        },
    });
    const config3: Configuration = merge({}, config1, {
        output: {
            filename: 'app.es2017.js',
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader({ target: 'es2017', module: 'es2015' })],
                },
            ]
        },
    });
    return [
        mainConfig,
        config1,
        config2,
        // config3,
    ];
};

function tsLoader({ target = 'es5', module = 'commonjs' } = {}) {
    return loader('ts', {
        transpileOnly: true,
        compilerOptions: {
            target, module
        }
    })
}
