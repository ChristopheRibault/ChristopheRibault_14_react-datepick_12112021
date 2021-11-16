import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

const INPUT_FILE_PATH = 'src/lib/index.js';
const OUTPUT_NAME = 'dist';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const PLUGINS = [
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!prop-types)/,
    ],
  }),
  commonjs(),
  filesize(),
];

const EXTERNAL = [
  'react',
  'react-dom',
  'prop-types',
];

const config = {
  input: INPUT_FILE_PATH,
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
};

export default config;
