import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'src/index.js',
    dest: 'js/app.js',
    format: 'umd',

    plugins: [
        resolve({ jsnext: true, main: true }),
        commonjs(),
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}
