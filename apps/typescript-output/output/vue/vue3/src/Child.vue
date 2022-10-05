<template>
  <div>{{ message || "Hello" }} {{ name }}! I am a Child component.</div>
</template>

<script lang="ts">
type Props = {
  message: string;
};

export default {
  name: "child-component",

  props: ["message"],

  data: () => ({ name: "Child" }),
};
</script>
