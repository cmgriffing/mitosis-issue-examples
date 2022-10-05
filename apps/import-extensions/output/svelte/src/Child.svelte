<script>
  export let message;

  let name = "Child";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Child component.
</div>
