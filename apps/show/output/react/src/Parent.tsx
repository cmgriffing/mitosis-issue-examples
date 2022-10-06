import * as React from "react";
import { useState } from "react";

type Props = {
  message: string;
};
import ChildComponent from "./Child.lite";

export default function ParentComponent(props: Props) {
  const [name, setName] = useState(() => "Parent");

  return (
    <div>
      {props.message || "Hello"}
      {name}! I am a Parent Component.
      {name === "Parent" ? (
        <>
          <ChildComponent message="Hi" />
        </>
      ) : null}
    </div>
  );
}
