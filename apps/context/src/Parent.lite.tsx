import { useStore, useContext, setContext } from "@builder.io/mitosis";
import Context from "./custom.context.lite";
import ChildComponent from "./Child.lite";

type Props = {
  message: string;
};

export default function ParentComponent(props: Props) {
  const state = useStore({
    name: "Parent",
  });
  const foo = useContext(Context);

  // you can use `setContext` to provide a new value for the context
  setContext(Context, {
    foo: "parent",
    content() {
      return props.message;
    },
  });

  return (
    <div>
      {props.message || "Hello"} {state.name}! I am a Parent Component.
      <ChildComponent message={"Hi"}></ChildComponent>
      {foo.foo}
    </div>
  );
}
