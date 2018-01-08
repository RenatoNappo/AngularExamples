import { FormValidators } from './../common/custom-validators/form-validators';

import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'assignment7-change-password-mosh',
  templateUrl: './assignment7-change-password-mosh.component.html',
  styleUrls: ['./assignment7-change-password-mosh.component.css']
})
export class Assignment7ChangePasswordMoshComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      oldPassword: ['', Validators.required,FormValidators.validateOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
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
