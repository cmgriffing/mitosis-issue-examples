import * as React from "react";
import { useState, useContext } from "react";

type Props = {
  message: string;
};
import Context from "./custom.context.js";

export default function ChildComponent(props: Props) {
  const [name, setName] = useState(() => "Child");

  const foo = useContext(Context);

  return (
    <Context.Provider
      value={{
        foo: "child",

        content() {
          return props.message;
        },
      }}
    >
      <div>
        {props.message || "Hello"}
        {name}! I am a Child component.
        {foo.foo}
      </div>
    </Context.Provider>
  );
}
