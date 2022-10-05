<template>
  <div>{{ message || "Hello" }} {{ name }}! I am a Child component.</div>
</template>

<script>
export default {
  name: "child-component",

  props: ["message"],

  data: () => ({ name: "Child" }),
};
</script>
