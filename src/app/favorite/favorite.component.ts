import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavourite') isFavourite: boolean;
  @Output("change") change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue: this.isFavourite});
  }
}

export interface FavoriteChangeEventArgs{
  newValue: boolean;
}
