import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsNameService {

  constructor() {
    
   }

   getAuthors(){
    return ['author1', 'author2', 'author3'];
   }

}
