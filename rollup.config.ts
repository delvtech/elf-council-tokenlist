import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import ttypescript from "ttypescript";

export default [
  // ES Modules
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.es.js",
      format: "es",
    },
    plugins: [
      typescript({
        // transform typescript, needed for transform paths
        typescript: ttypescript,
        tsconfigOverride: {
          compilerOptions: {
            // hardhat requires commonjs
            module: "esnext",
          },
          // don't include hardhat.config.ts
          files: null,
        },
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              // transform aliased paths.  source files have a 'src' alias when importing. we need
              // to remove this for declaration files in dist/
              { transform: "typescript-transform-paths" },
              {
                transform: "typescript-transform-paths",
                afterDeclarations: true,
              },
            ],
          },
        },
      }),
      json(),
      babel({ extensions: [".ts"], babelHelpers: "bundled" }),
      terser(),
    ],
  },
  //   // UMD
  //   {
  //     input: "src/index.ts",
  //     output: {
  //       file: "dist/index.umd.min.js",
  //       format: "umd",
  //       name: "Elf Council Tokenlist",
  //       indent: false,
  //     },
  //     plugins: [
  //       typescript(),
  //       json(),
  //       babel({
  //         extensions: [".ts"],
  //         exclude: "node_modules/**",
  //         babelHelpers: "bundled",
  //       }),
  //       terser(),
  //     ],
  //   },
];
