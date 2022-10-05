import { useStore } from "@builder.io/mitosis";
import ChildComponent from "./Child.lite";

type Props = {
  message: string;
};

export default function ParentComponent(props: Props) {
  const state = useStore({
    name: "Parent",
  });

  return (
    <div>
      {props.message || "Hello"} {state.name}! I am a Parent Component.
      <ChildComponent {...props}></ChildComponent>
    </div>
  );
}
