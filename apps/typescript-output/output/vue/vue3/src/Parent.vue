<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I am a Parent Component.
    <child-component message="Hi"></child-component>
  </div>
</template>

<script lang="ts">
type Props = {
  message: string;
};

import ChildComponent from "./Child.vue";

export default {
  name: "parent-component",
  components: { ChildComponent: ChildComponent },
  props: ["message"],

  data: () => ({ name: "Parent" }),
};
</script>
