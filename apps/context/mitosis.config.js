module.exports = {
  files: "src/**",
  targets: [
    // "vue3", "solid", "svelte", "react"
    "svelte",
    "vue3",
    "angular",
    "react",
  ],
  options: {
    vue3: {
      typescript: true,
      api: "composition",
    },
    svelte: {
      typescript: true,
    },
    angular: {
      typescript: true,
    },
    react: {
      typescript: true,
    },
  },
};
