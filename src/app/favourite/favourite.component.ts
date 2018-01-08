import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavouriteChangedEventArgs {
  isSelected: boolean
}

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styles: [
    `.glyphicon{color: green}`
  ],
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FavouriteComponent {

  @Input('is-favourite') isFavourite: boolean;

  @Output('change') click = new EventEmitter();


  onFavouriteClick(){
    this.isFavourite = !this.isFavourite;
    this.click.emit({
      isSelected: this.isFavourite
    });
  }

  DisplayIsFavourite(){
    console.log("IsFavourite = " + this.isFavourite);
  }
}
