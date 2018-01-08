import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-trackby-example',
  templateUrl: './ng-for-trackby-example.component.html',
  styleUrls: ['./ng-for-trackby-example.component.css']
})

export class NgForTrackbyExampleComponent {

  courses;

  LoadCourses(){
    this.courses = [
      {id: 1, name: 'course 1'},
      {id: 2, name: 'course 2'},
      {id: 3, name: 'course 3'}
    ]  
  }

  trackCourse(index, course){
      return course ? course.id : undefined;
  }

}

