module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          components: "./components",
          constants: "./constants",
          hooks: "./hooks",
          navigation: "./navigation",
          screens: "./screens",
          selectors: "./selectors",
          state: "./state",
        },
      },
    ],
  ],
};
