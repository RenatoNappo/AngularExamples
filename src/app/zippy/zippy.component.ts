import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('isShown') isShown: boolean;
  @Input('title') title:string;
  
  constructor() { }

  showDetails(){
    this.isShown = !this.isShown;
  }

}
