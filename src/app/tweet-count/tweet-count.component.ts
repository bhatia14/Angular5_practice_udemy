import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet-count',
  templateUrl: './tweet-count.component.html',
  styleUrls: ['./tweet-count.component.css']
})
export class TweetCountComponent implements OnInit {

  @Input('isLiked') isLiked: boolean;
  counter: number;
  hover:boolean;

  ngOnInit() {
  }
  toggleClick(){
    this.isLiked = !this.isLiked;
    this.counter = this.isLiked? 1:0;  
  }

  mouseEnter(div : boolean){
    console.log("mouse enter : " +  div);
    
 }

 mouseLeave(div : boolean){
   console.log('mouse leave :' + div);
 }
}
