import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: string[];
  authorImage = "https://images-eu.ssl-images-amazon.com/images/G/02/kindle/merch/2017/campaign/tekglasaus/gw/austin_now_shipping-gw-d-uk-1500x300._CB507830982_.jpg";
  colSpan = 2;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
    
  }

}
