<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I am a Parent Component.
    <child-component message="Hi"></child-component>
    {{ foo.foo }}
  </div>
</template>

<script setup lang="ts">
import { inject, provide, ref } from "vue";
type Props = {
  message: string;
};

import Context from "./custom.context.js";
import ChildComponent from "./Child.vue";

const props = defineProps<Props>();
const name = ref("Parent");

const foo = inject(Context);

provide(Context, undefined);
</script>
