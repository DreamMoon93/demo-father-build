export default {
  esm: "rollup",
  cjs: "rollup",
  umd: {
    name: "lcgc-ui",
    globals: {
      react: "React"
    }
  },
  doc: {
    base: "/demo-father-build"
  }
};
