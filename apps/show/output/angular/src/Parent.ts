import { Component, Input } from "@angular/core";

type Props = {
  message: string;
};

@Component({
  selector: "parent-component, ParentComponent",
  template: `
      <div >
            
      {{message || "Hello"}}
       
      {{name}}
      ! I am a Parent Component.
            
      <ng-container *ngIf="name === "Parent"">
              
      <child-component  message="Hi" ></child-component>

            </ng-container>

          </div>
      `,
})
export default class ParentComponent {
  @Input() message: Props["message"];

  name = "Parent";
}
