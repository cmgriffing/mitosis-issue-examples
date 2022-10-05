<script context="module" lang="ts">
  type Props = {
    message: string;
  };
</script>

<script lang="ts">
  import ChildComponent from "./Child.svelte";

  export let message: Props["message"];

  let name = "Parent";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Parent Component.
  <ChildComponent {...props} />
</div>
