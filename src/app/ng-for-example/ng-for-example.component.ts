import { Component } from '@angular/core';

@Component({
  selector: 'ngforexample',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent {

  courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'}
  ]

  AddCourse(){
    this.courses.push({
      id: 4, name: 'course 4'
    });
  }

  RemoveCourse(course){
    let index: number = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }


  ChangeCourseName(course){
    course.name = "Updated";
  }
}



