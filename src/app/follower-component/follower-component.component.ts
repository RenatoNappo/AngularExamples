import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'follower-component',
  templateUrl: './follower-component.component.html',
  styleUrls: ['./follower-component.component.css']
})
export class FollowerComponent implements OnInit {

  followers: any[];

  constructor(private followerservice: FollowerService) { }

  ngOnInit() {

    this.followerservice.getAll()
    .subscribe(followers => this.followers = followers);

  }

}
