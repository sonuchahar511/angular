import { Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
//if only one input property then use selector as alias in input property
  @Input('format') format;
  @Input('appInputFormat') format2;
  
  @HostListener('focus') onFocus(){
    console.log("onFocus Custom Directive");
  }

  @HostListener('blur') onBlur(){ 
    if(this.format == undefined){
      this.format=this.format2;
    }
    let inputFieldValue:string=this.el.nativeElement.value;
    if(this.format=='uppercase'){
      this.el.nativeElement.value=inputFieldValue.toUpperCase(); 
    }else{
      this.el.nativeElement.value=inputFieldValue.toLowerCase()
    }
        // this.el.nativeElement.value=(<string>inputFieldValue).toLowerCase(); 
  }
  constructor(private el:ElementRef){ }
}
