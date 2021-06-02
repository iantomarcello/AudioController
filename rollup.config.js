import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'ts/AudioController.ts',
  output: [
    { file: 'js/cjs/AudioController.js', format: 'cjs', },
    { file: 'js/esm/AudioController.js', format: 'es', },
  ],
  plugins: [
    typescript(),
    terser(),
  ],
};
