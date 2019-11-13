import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.less']
})
export class LikesComponent{
  @Input("likesCount") likesCount:number;
  @Input("active") isActive:boolean;
  
  onLikesClicked(){
    this.likesCount+=this.isActive?-1:1;
    this.isActive=!this.isActive;
  }
  onLikesClicked2(){
    this.isActive=!this.isActive;
    this.isActive?this.likesCount++:this.likesCount--;   
  }
}
