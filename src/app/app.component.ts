import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app1';
  theTitle:string;
  post = {
    isFavourite:true
  }

  tweet={
    body:"This is the tweeter like",
    isLiked:false,
    likeCounter:0
  }

  onFavoriteChange(newvalue: FavoriteChangeEventArgs){
    console.log("Favorite has changed:", newvalue);
  }
}
