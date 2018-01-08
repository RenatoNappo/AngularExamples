import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isActive: boolean;
  @Input('likeCount') likeCount: number;
  @Input('tweetBody') tweetBody: string;

  OnLikeClick()
  {
    this.isActive = !this.isActive;
    this.likeCount += (this.isActive) ? 1 : -1;
  }
}


