<script>
  import ChildComponent from "./Child.svelte";

  export let message;

  let name = "Parent";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Parent Component.
  <ChildComponent message="Hi" />
</div>
