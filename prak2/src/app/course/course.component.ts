import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  Courses;
  currentDate = Date.now();

  title = "belajar angular";
  getTitle(){
    return this.title;
  }
  courses = [
    {id :0 , nama: "ina"},
    {id :1 , nama: "ine"},
    {id :2 , nama: "ini"},
    {id :3 , nama: "ino"}
  ];
  constructor(private c:CoursesService) {
    this.Courses = c.getCourses();
   }

  ngOnInit() {
  }

}
