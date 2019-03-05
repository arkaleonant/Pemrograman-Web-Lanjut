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

  isActive = true;
  
  nama = "Shintia";

  onSave($event){
    $event.stopPropagation();
    console.log("save sudah di klik !", $event);
  }
  onDivClick($event){
    console.log("div sudah di klik !", $event);
  }

  onKeyup(nama){
    console.log(this.nama);
  }

  constructor(private t:Tugas3Service) {
    this.hobi = t.getTugas3();
   }


  ngOnInit() {
  }

}
