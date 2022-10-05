import { useStore, useContext, setContext } from "@builder.io/mitosis";
import Context from "./custom.context.lite";

type Props = {
  message: string;
};

export default function ChildComponent(props: Props) {
  const state = useStore({
    name: "Child",
  });

  const foo = useContext(Context);

  // you can use `setContext` to provide a new value for the context
  setContext(Context, {
    foo: "child",
    content() {
      return props.message;
    },
  });

  return (
    <div>
      {props.message || "Hello"} {state.name}! I am a Child component.
      {foo.foo}
    </div>
  );
}
