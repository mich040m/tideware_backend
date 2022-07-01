module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "@typescript-eslint/no-inferrable-types": 0,
    "max-len": 0,
    "new-cap": 0,
    "eol-last": 0,
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "object-curly-spacing": ["error", "always"],
    "valid-jsdoc:": 0,
    "require-jsdoc": 0,
  },
};
