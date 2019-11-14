import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less']
})
export class FavoriteComponent implements OnInit { 
  // @Input() isFavorite:boolean;
  @Input("is-favorite") isSelected:boolean;

  @Output("change")  change=new EventEmitter();
  constructor() { }

  ngOnInit() {}

  // onFavClick(){
  //   this.isFavorite=!this.isFavorite;
  //   this.change.emit(this.isFavorite);
  // }
  isSelectedClicked(){
    this.isSelected=!this.isSelected;
    // this.change.emit(this.isSelected);
    // this.change.emit(this);
    this.change.emit({
      newValue:this.isSelected
    });

  }
}
export interface FavoriteChangedEventArgs{
  newValue:boolean
}
