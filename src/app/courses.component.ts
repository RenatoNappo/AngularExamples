import { FavouriteChangedEventArgs } from './favourite/favourite.component';

import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
                <br>
                <ul>
                 <li *ngFor="let course of courses">{{ course }}</li>
                </ul>
                <div (click)="onDivClicked()">

                    <input placeholder="Enter your name" (keyup.enter)="onKeyUp($event)"/><br/>
                    <input placeholder="Enter your email address" #email (keyup.enter)="onKeyUpEmail(email.value)"/><br/>
                    
                    <input [value]="address" (keyup.enter)="address = $event.target.value; onKeyUpAddress()"/><br/>
                    <input [(ngModel)]="address" (keyup.enter)="onKeyUpAddress()"/><br/>

                    <button class="btn btn-primary" (click)="onSave($event)">Save</button><br/>
                </div>
                <div>
                    {{ course.title | uppercase | lowercase}}<br/>
                    {{ course.rating | number:'1.1-1' }}<br/>
                    {{ course.students | number }}<br/>
                    {{ course.price | currency:'GBP':true:'2.2-2' }}<br/>
                    {{ course.releaseDate | date:'shortDate' }}<br/>
                </div>
                <p>
                    <favourite [is-favourite]="isActive" (change)="onFavouriteChanged($event)"></favourite>
                    {{ text | summary }}
                </p>`
})



export class CoursesComponent{

    post = {
         isFavourite: true
    }

    title: string = "List of courses";
    courses: string[];
    isActive = true;

    address: string = "me@example.com";

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 90.95,
        releaseDate: new Date(2016,3,1)
    }

    text = "It was November. Although it was not yet late, the sky was dark when I turned into Laundress Passage. Father had finished for the day, switched off the shop lights and closed the shutters; but so I would not come home to darkness he had left on the light over the stairs to the flat. Through the glass in the door it cast a foolscap rectangle of paleness onto the wet pavement, and it was while I was standing in that rectangle, about to turn my key in the door, that I first saw the letter. Another white rectangle, it was on the fifth step from the bottom, where I couldn't miss it.";

    constructor(coursesService: CoursesService){
        this.courses = coursesService.getCourses();
    }

    getTitle(){
        return this.title;
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked($event){
        console.log("Div was clicked");
    }

    onKeyUp($event){
       console.log($event.target.value);
    }

    onKeyUpEmail(email){
        console.log("The user's email address is " + email);
    }

    onKeyUpAddress(){
        console.log(this.address);
    }

    onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
        console.log("Favourite Changed to ", eventArgs.isSelected); 
    }
}


//<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>




