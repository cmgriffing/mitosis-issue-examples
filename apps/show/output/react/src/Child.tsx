import * as React from "react";
import { useState } from "react";

type Props = {
  message: string;
};

export default function ChildComponent(props: Props) {
  const [name, setName] = useState(() => "Child");

  return (
    <div>
      {props.message || "Hello"}
      {name}! I am a Child component.
    </div>
  );
}
