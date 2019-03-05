import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas2',
  templateUrl: './tugas2.component.html',
  styleUrls: ['./tugas2.component.css']
})
export class Tugas2Component implements OnInit {

  title = '3 Authors';

  authors = [
    {nama : "aouthor 1"},
    {nama : "aouthor 2"},
    {nama : "aouthor 3"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
