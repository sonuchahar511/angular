import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:"courses",
    template:`
    <h2>{{getTitle()+' :: '+title}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>  
     <h2>FetcheD By TIGHTLY COUPLED SERVICE</h2>
    <ul>
        <li *ngFor="let course1 of coursesFetchedFromService1">{{course1}}</li>
    </ul>  
     
     <h2>FetcheD By LOOSELY COUPLED SERVICE</h2>
    <ul>
        <li *ngFor="let course2 of coursesFetchedFromService2">{{course2}}</li>
    </ul> 
    <h2 [textContent]="title"></h2>
    <img src="{{ imageUrl }}"/>&nbsp;&nbsp;&nbsp;&nbsp; 
    <img [src]="imageUrl"/>
    <table>
        <tr>
            <!-- in first line angular mapping DOM property colspan of td BUT
            in DOM  td doesn't have colspan property. 
            Similarly html h2 doesn't have textContent property. 
            IN SECOND td you mention attr.colspan it means angular will treat it as 
            td html property not as td dom property 
            -->
            <!-- <td [colspan]="colSpan"> </td>  DOM  vs HTML-->
            <td [attr.colspan]="colSpan"> </td> 
        </tr>
    </table>
    <button class="btn btn-primary">Bootstrap Save</button>&nbsp;&nbsp;&nbsp;&nbsp; 
    <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>&nbsp;&nbsp;&nbsp;&nbsp; 
    <button class="btn btn-primary" [style.backgroundColor]="isActive?'blue':'grey'">BStyle Binding</button><br><br>
    <button class="btn btn-primary" (click)="onClickSave1()">Click Event</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="btn btn-primary" (click)="onClickSave2($event)">Clieck Event passing event in method</button>
    <br><br>
    <div (click)="onDivClicked()">
    <button class="btn btn-primary" (click)="onClickSave2($event)">Event Bubbling
    </button></div><br>
    Keyup traditional <input (keyup)="onKeyUp1($event)"/>&nbsp;&nbsp;&nbsp;&nbsp;
    Keyup With Angular Filter <input (keyup.enter)="onKeyUp2()"/>
    <br><br>
    Send Value <input (keyup.enter)="onKeyUp3($event)"/> &nbsp;&nbsp;&nbsp;&nbsp;
    Template Variable <input #email (keyup.enter)="onKeyUp4(email.value)"/>

    `
})

export class CoursesComponent{
    title="List of Courses";

    courses=["course1","course2","course3"];
    coursesFetchedFromService1;
    coursesFetchedFromService2;
    imageUrl="https://picsum.photos/id/844/200/300";
    colSpan=2;
    isActive=false;

    /*in real world applicaiton CourseList would be 
    fetched from server. So one can write Logic for calling an HTTP service 
    but should not be written in component as it will create tight coupling
    between component and service. should write calling logic in different file.

    COMPONENT SHOULD NOT INCLUDE ANY OTHER LOGIC OTHER THAN THE PRESENTATION 
    LOGIC.
    */
    constructor(looselyCoupledCourseServiceByDI:CoursesService){
        //CoursesService tightly coupled here.
        let tightlyCoupledCourseService=new CoursesService();
        this.coursesFetchedFromService1=tightlyCoupledCourseService.getCourses();
        this.coursesFetchedFromService2=looselyCoupledCourseServiceByDI.getCourses();
    }
    getTitle(){
        return this.title;
    }
    onClickSave1(){
        
        alert("Button was clicked...")
    }
    onClickSave2($event){
        //$event.stopPropagation();
        alert("Button was clicked::: "+$event+ 
        "Please check the console for detailed information about event");
        console.log($event)
    }
    onDivClicked(){
        alert("div was clicked!!")
    }

    onKeyUp1($event){
        if($event.keyCode===13){
            alert("ENTER was pressed")
        }
    }

    onKeyUp2(){
        alert("ENTER was pressed!!!")
    }
    onKeyUp3($event){
        alert($event.target.value)
    }
    onKeyUp4(email){
        alert(email)
    }
}