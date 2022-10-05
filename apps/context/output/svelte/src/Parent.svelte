<script context="module" lang="ts">
  type Props = {
    message: string;
  };
</script>

<script lang="ts">
  import { getContext, setContext } from "svelte";

  import Context from "./custom.context.js";
  import ChildComponent from "./Child.svelte";

  export let message: Props["message"];

  let foo = getContext(Context.key);
  setContext(Context.key, {
    foo: "parent",
    content() {
      return message;
    },
  });

  let name = "Parent";
</script>

<div>
  {message || "Hello"}
  {name}! I am a Parent Component.
  <ChildComponent message="Hi" />
  {foo.foo}
</div>
