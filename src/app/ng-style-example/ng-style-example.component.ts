import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngstyleexample',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent {

  @Input('canSave') canSave: boolean;

  setCanSave(){
    this.canSave = !this.canSave;
    console.log("canSave = " + this.canSave);
  }

}





