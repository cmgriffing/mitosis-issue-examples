<template>
  <div>{{ message || "Hello" }} {{ name }}! I am a Child component.</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
type Props = {
  message: string;
};

const props = defineProps<Props>();
const name = ref("Child");
</script>
