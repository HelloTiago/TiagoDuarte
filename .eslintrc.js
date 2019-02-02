module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
        alias: { components: "./components" }
      }
    }
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/require-default-props": [0],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"]
      }
    ]
  }
};
