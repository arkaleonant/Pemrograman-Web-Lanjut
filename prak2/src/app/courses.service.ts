import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(){
    return [
      {id : 0, mobil : "swift"},
      {id : 1, mobil : "pajero "},
      {id : 2, mobil : "pewasaw"}
    ];
  }
  constructor() { }
}
