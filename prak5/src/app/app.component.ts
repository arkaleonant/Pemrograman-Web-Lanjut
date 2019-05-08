import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'praktikum5';
  courses = [1,2];
  
  // coursesFor = [
  //   {id:1,name:'course1'},
  //   {id:2,name:'course2'},
  //   {id:3,name:'course3'},
  //   {id:4,name:'course4'},
  //   {id:5,name:'course5'},
  // ]

  // viewMode = 'map'; 

  // onAdd(){
  //   this.coursesFor.push({id:6,name:'courses6'});
  // }

  // onRemove(item){
  //   this.coursesFor.splice(item);
  // }

  // onChange(item){
  //   item.name='updated';
  
  // coursesForOne;
  // loadCourses(){
  //   this.coursesForOne=[
  //    {id:1,nama:'coursesone1'},
  //    {id:2,nama:'coursesone2'},
  //    {id:3,nama:'coursesone3'},
  //    {id:4,nama:'coursesone4'},
  //    {id:5,nama:'coursesone5'},
  //   ];
  // }

  // trackCourse(index,itemone){
  //   return itemone ? itemone.id : undefined;
  // }
}
