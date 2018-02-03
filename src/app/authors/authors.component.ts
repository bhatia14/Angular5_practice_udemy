import { Component, OnInit } from '@angular/core';
import { AuthorsNameService } from '../authors-name.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorNames;
  constructor(authorsService: AuthorsNameService) {
      this.authorNames = authorsService.getAuthors();
   }

  ngOnInit() {
  }

}
