import uglify from "rollup-plugin-uglify-es";
import babel from "rollup-plugin-babel";
import scss from "rollup-plugin-scss";

// rollup.config.js
const config = {
  input: "src/index.js",
  external: ["react"],
  output: {
    format: "umd",
    name: "component",
    globals: {
      react: "React"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify(),
    scss()
  ]
};
export default config;
