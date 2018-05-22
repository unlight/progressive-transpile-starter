import * as fs from 'fs';
import { resolve } from 'path';
import { loader } from 'webpack-loader-helper';
import { Configuration } from 'webpack';

process['traceDeprecation'] = true;

export = (options: any = {}) => {
    const config1: Configuration = {
        mode: 'production',
        entry: './src/index.ts',
        devtool: false,
        output: {
            path: resolve('dist'),
            filename: 'app.es5.js',
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader('es5')],
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
    const config2: Configuration = {
        ...config1,
        output: {
            path: resolve('dist'),
            filename: 'app.es2015.js',
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader('es2015')],
                },
            ]
        },
    };
    const config3: Configuration = {
        ...config2,
        output: {
            path: resolve('dist'),
            filename: 'app.es2017.js',
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [tsLoader('es2017')],
                },
            ]
        },
    };
    return [config1, config2, config3];
};

function tsLoader(target = 'es5') {
    return loader('ts', {
        transpileOnly: true,
        compilerOptions: {
            target
        }
    })
}
