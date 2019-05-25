import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  userFilter: any = { name: '' };

  dataAnda=[
    ]
    constructor(private filterPipe: FilterPipe) {
      console.log(filterPipe.transform(this.dataAnda, { name: ''}));
    }
      submit(form){
        this.dataAnda.push({id: this.dataAnda.length + 1, name: this.uppercase(form.nama), email: form.email, contact: form.contact});
       
       }
       uppercase(nama){
        return nama.toUpperCase();  
      }
    }