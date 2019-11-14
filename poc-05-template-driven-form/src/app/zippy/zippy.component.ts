import { Component,Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent  {
  @Input('title') title:string;
  isExpanded:boolean=true;

  toggle(){
    this.isExpanded=!this.isExpanded;
  }
} 
 