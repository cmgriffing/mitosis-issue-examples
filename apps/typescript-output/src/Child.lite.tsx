import { useStore } from "@builder.io/mitosis";

type Props = {
  message: string;
};

export default function ChildComponent(props: Props) {
  const state = useStore({
    name: "Child",
  });

  return (
    <div>
      {props.message || "Hello"} {state.name}! I am a Child component.
    </div>
  );
}
