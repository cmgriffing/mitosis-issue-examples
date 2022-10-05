module.exports = {
  files: "src/**",
  targets: [
    // "vue3", "solid", "svelte", "react"
    "vue3",
    "svelte",
  ],
  options: {
    vue3: {
      typescript: true,
    },
    svelte: {
      typescript: true,
    },
  },
};
