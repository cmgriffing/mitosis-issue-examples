<script context="module" lang="ts">
  type Props = {
    message: string;
  };
</script>

<script lang="ts">
  import { getContext, setContext } from "svelte";

  import Context from "./custom.context.js";

  export let message: Props["message"];

  let foo = getContext(Context.key);
  setContext(Context.key, {
    foo: "child",
    content() {
      return message;
    },
  });

  let name = "Child";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Child component.
  {foo.foo}
</div>
