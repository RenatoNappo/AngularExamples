import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title: 'My Angular app';

    isActive = true;
    canSave = true;

    tweet={
      body: 'Here is the body of a tweet...',
      isActive: false,
      likeCount: 0
    }

}

