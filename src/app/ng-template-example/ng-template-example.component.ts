
import { Component } from '@angular/core';

@Component({
  selector: 'ngtemplateexample',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.css']
})

export class NgtemplateexampleComponent {

  courses: string[] = ['Angular 2','ASP.NET MVC','Javascript','HTML 5', 'CSS 3']; 

  DoWeHaveAnyCourses(){
    if(this.courses.length > 0)
      return true;
    else
      return false;
  }
}

