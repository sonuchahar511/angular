import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent{
  contactMethods=[
    {id:1, name: "Email"},
    {id:2, name: "Phone"}
  ]
  contactMethods2=[
    {id:1, name: "Email"},
    {id:2, name: "Phone"}
  ]

  contactMethods4=[
    {id:1, name: "Email"},
    {id:2, name: "Phone"}
  ]
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f);
  }

}
