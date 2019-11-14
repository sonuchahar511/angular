import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular App';

  post={
    title : 'Title',
    isFavorite : true
  }

  tweet={
    likesCount:10,
    isLiked:false
  }

  courses=[1,2,3,4,5];
  viewMode="somethingElse";

  courses1=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
  ]
  courses2=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
  ]
  courses3;

  canSave=false;

  task={
    title:"Review Applications",
    assignee:{
      name: 'Will Smith'
    }
  }

  onFavChanged(eventArngs:FavoriteChangedEventArgs){
    alert("Favorite onFavChanged:: "+eventArngs.newValue);
  }

  onAdd(){
    this.courses2.push({id:4,name:"course4"});
  }

  onRemove(course){
    let indexOfCourse=this.courses2.indexOf(course);
    this.courses2.splice(indexOfCourse,1);
  }
  onChange(course){
    course.name="UPDATED"
  }
  loadCourses(course){
    this.courses3=[
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
      {id: 4, name: 'course4'}
    ]
  }
  trackCourse(index,course){
    return course ? course.id : undefined;
  }
}
 