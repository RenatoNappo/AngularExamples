import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  txtInput:string;
  ignoredChars: number [] = [37, 38, 39, 40, 46];
  commentCharCount: number = 0 ;
  commentMessage: string = "(" + this.commentCharCount + " of 500 characters)";

  contactMethods = [
    { id: 1, name: 'Fax' },
    { id: 2, name: 'Email' },
    { id: 3, name: 'Telephone' }
  ];

  log(x){
    console.log(x);
  }


  resetCommentCharCount($event){
    if(this.IsKeyCodeIgnored($event.keyCode))
      return;
    else
    {
      this.txtInput = $event.target.value;
      this.commentCharCount = this.txtInput.length;
      this.commentMessage = "(" + this.commentCharCount + " of 500 characters)";
    }
  }

  
  IsKeyCodeIgnored (keyCode): boolean{
      if(this.ignoredChars.indexOf(keyCode) > -1)
        return true;
      else
        return false;
  }


  submit(f){
    console.log(f);
  }


}
