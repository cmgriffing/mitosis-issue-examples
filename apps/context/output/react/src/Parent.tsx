import * as React from "react";
import { useState, useContext } from "react";

type Props = {
  message: string;
};
import Context from "./custom.context.js";
import ChildComponent from "./Child.lite";

export default function ParentComponent(props: Props) {
  const [name, setName] = useState(() => "Parent");

  const foo = useContext(Context);

  return (
    <Context.Provider
      value={{
        foo: "parent",

        content() {
          return props.message;
        },
      }}
    >
      <div>
        {props.message || "Hello"}
        {name}
        ! I am a Parent Component.
        <ChildComponent message="Hi" />
        {foo.foo}
      </div>
    </Context.Provider>
  );
}
