import { Component, Input } from "@angular/core";

type Props = {
  message: string;
};

@Component({
  selector: "parent-component, ParentComponent",
  template: `
    <div>
      {{message || "Hello"}} {{name}} ! I am a Parent Component.

      <child-component message="Hi"></child-component>

      {{foo.foo}}
    </div>
  `,
})
export default class ParentComponent {
  @Input() message: Props["message"];

  name = "Parent";

  constructor(public foo: Context) {}
}
