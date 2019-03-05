import { Component, OnInit } from '@angular/core';
import { Tugas3Service } from '../tugas3.service';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  hobi;
  currentDate = Date.now();

  datas = [
    {data : "Nama : Maria Sinta Bella"},
    {data : "Alamat : jln.Mawar gang 10"},
    {data : "Hobby Saya"}
  ]
  constructor(private t:Tugas3Service) {
    this.hobi = t.getTugas3();
   }

  ngOnInit() {
  }

}
