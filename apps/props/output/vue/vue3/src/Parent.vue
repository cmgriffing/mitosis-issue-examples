<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I am a Parent Component.
    <child-component v-bind="props"></child-component>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
type Props = {
  message: string;
};

import ChildComponent from "./Child.vue";

const props = defineProps<Props>();
const name = ref("Parent");
</script>
