// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: ["expo-router/babel"],
//   };
// };
module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  return {
    presets,
  };
};