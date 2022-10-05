<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I am a Child component.
    {{ foo.foo }}
  </div>
</template>

<script setup lang="ts">
import { inject, provide, ref } from "vue";
type Props = {
  message: string;
};

import Context from "./custom.context.js";

const props = defineProps<Props>();
const name = ref("Child");

const foo = inject(Context);

provide(Context, undefined);
</script>
