module.exports = {
  files: "src/**",
  targets: [
    // "vue3", "solid", "svelte", "react"
    "angular",
    "react",
  ],
  options: {
    angular: {
      typescript: true,
    },
    react: {
      typescript: true,
    },
  },
};
