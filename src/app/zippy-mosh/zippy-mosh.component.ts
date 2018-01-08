import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy-mosh',
  templateUrl: './zippy-mosh.component.html',
  styleUrls: ['./zippy-mosh.component.css']
})
export class ZippyMoshComponent {

  @Input('title') title: string;
  isExpanded: boolean;

  toggleExpansion(){
    this.isExpanded = !this.isExpanded;
  }

}
