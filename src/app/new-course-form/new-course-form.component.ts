import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

export class NewCourseFormComponent {

  form;
  
  constructor(formbuilder: FormBuilder){

    this.form = formbuilder.group({
        name: ['', Validators.required],
        contact: formbuilder.group({
          email: [],
          phone: []
        }),
        topics: formbuilder.array([])
    });

  }










  /*addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }*/

}



