
// noinspection JSUnusedGlobalSymbols

export default {
  exclude: [
  ],
  mount: {
    src: {url: "/"}
  },
  plugins: [
    ["snowpack-plugin-raw", { extensions: [".htm"] }],
    ["@snowpack/plugin-optimize", { /* see options below */ }]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8080,
    open: "firefox",
    output: "dashboard",
    hostname: "localhost",
  },
  buildOptions: {
    out: "public",
    sourcemap: true,
    clean: true,
    minify: true,
  },
};
