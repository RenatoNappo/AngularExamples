import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  getAuthors(){
    return ["Isaac Azimov","Iain M. Banks","Arthur C Clarke",];
  }

}
