
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { FormValidators } from './../common/custom-validators/form-validators';


@Component({
  selector: 'assignment7changepassword',
  templateUrl: './assignment7-change-password.component.html',
  styleUrls: ['./assignment7-change-password.component.css']
})
export class Assignment7ChangePasswordComponent {

  form;

  constructor(fb: FormBuilder) {
    
        this.form = fb.group({
          oldPassword: ['', Validators.required,FormValidators.validateOldPassword],
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
        },{
          validator: FormValidators.passwordsShouldMatch
        });
  }


  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

}

