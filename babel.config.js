module.exports = {
    presets: [
      // preset helps our testing library to convert jsx to js
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react', { runtime: "automatic" }],
    ],
    "plugins": ["@babel/plugin-transform-runtime"]
  };