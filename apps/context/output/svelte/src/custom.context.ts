const key = Symbol();

export default {
  Custom: {
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
  },
  key,
};
