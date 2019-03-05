import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tugas3Service {
  getTugas3(){
    return [
      {no : 1, hobby : "berlari", keterangan : "lari 1 jam tiap hari"},
      {no : 2, hobby : "senam", keterangan : "senam tiap sore" },
      {no : 3, hobby : "bermain musik", keterangan : "bermain musik saat waktu senggang"},
    ];
  }

  constructor() { }
}
