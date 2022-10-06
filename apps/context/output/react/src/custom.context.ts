import { createContext } from "react";

export default createContext({
  foo: "bar",
  get fooUpperCase() {
    return this.foo.toUpperCase();
  },
  someMethod() {
    return this.fooUpperCase.toLowercase();
  },
  content: null,
  context: {},
  state: {},
});
