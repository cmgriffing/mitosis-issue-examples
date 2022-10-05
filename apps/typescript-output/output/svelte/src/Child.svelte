<script context="module" lang="ts">
  type Props = {
    message: string;
  };
</script>

<script lang="ts">
  export let message: Props["message"];

  let name = "Child";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Child component.
</div>
