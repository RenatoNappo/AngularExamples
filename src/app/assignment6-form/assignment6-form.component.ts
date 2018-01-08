import { Component } from '@angular/core';

@Component({
  selector: 'assignment6-form',
  templateUrl: './assignment6-form.component.html',
  styleUrls: ['./assignment6-form.component.css']
})
export class Assignment6FormComponent {

  courseCategories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Language' }
  ];


  submit(course){
    console.log(course);
  }

}


