import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: "",
        locales: "",
    };

    // if (config?.resolve?.modules) config.resolve.modules.push(paths.src);
    config.resolve!.modules = [paths.src, "node_modules"];

    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
        ...config.resolve!.alias,
        "@": paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule: any) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("https://testapi.ru"),
        __PROJECT__: JSON.stringify("storybook"),
    }));

    return config;
};
