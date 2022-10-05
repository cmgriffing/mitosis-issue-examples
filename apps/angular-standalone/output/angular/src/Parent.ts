import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

type Props = {
  message: string;
};

import ChildComponent from "./Child";

@Component({
  selector: "parent-component, ParentComponent",
  template: `
    <div>
      {{message || "Hello"}} {{name}} ! I am a Parent Component.

      <child-component message="Hi"></child-component>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, ChildComponent],
})
export default class ParentComponent {
  @Input() message: Props["message"];

  name = "Parent";
}
