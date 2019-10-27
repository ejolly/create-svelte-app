// Rollup will take everything in the src/ directory and use Svelte's compiler to create 2 files under public/: bundle.js and bundle.css along with their .map files. These files are sourced within index.html making this a static app without the need for a backend server. Simply drop those files along with index.html and 404.html onto a static file host (e.g. netlify or a personal server) and you should be good to go!
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css');
      },
      onwarn: (warning, handler) => {
        // Tell svelte not to warn us about hrefs with a URL set to #
        if (warning.code === 'a11y-invalid-attribute') return;
        // but let Rollup handle all other warnings normally
        handler(warning);
      }
    }),
    // Babel is being used to make ES2015 features (like arrow functions) available to all browsers (only when npm run build is called). This is called *transpiling*. Additionally babel using using core-js to create *pollyfills* to make turn some JS features that don't exist in some browsers into compatible ones that do exist. This has to increase bundle size a bit but that's the cost of higher compatibility. Refs: 
    // http://simey.me/svelte3-rollup-and-babel7/
    // https://github.com/sveltejs/svelte/issues/3388
    // https://github.com/sveltejs/svelte/issues/2621
    // https://blog.az.sg/posts/svelte-and-ie11/
    production && babel({
      extensions: [".js", ".mjs", ".html", ".svelte"],
      include: ['src/**', 'node_modules/svelte/**'],
      runtimeHelpers: true,
      presets: [
        [
          '@babel/preset-env',
          {
            "debug": true, // change this to see babel in action
            useBuiltIns: 'usage',
            corejs: 3,
            targets: "> 0.25%, not dead",
            modules: false
          },
        ],
      ],
    }),
    // Parse .scss file for bulma
    postcss(),
    // Came with the svelte template
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    // Came with the svelte template
    commonjs(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload({ watch: 'public', port: 8080 }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
