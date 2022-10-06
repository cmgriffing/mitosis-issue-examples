import { Component, Input } from "@angular/core";

type Props = {
  message: string;
};

@Component({
  selector: "child-component, ChildComponent",
  template: `
    <div>{{message || "Hello"}} {{name}} ! I am a Child component.</div>
  `,
})
export default class ChildComponent {
  @Input() message: Props["message"];

  name = "Child";
}
