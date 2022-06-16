import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  contacts: any[] = []
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(
  
  ): void {
    this.http.get<any[]>("http://localhost:3001/contacts").subscribe((data) => {
      this.contacts = data
    })
  }
  onDelete(id:number) {
    const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
    if(confirm){
        this.http.delete("http://localhost:3001/contacts/"+id).subscribe(() => {
          alert("Xoá thành công");
          this.contacts = this.contacts.filter(item => item.id !== id);
        })
    }
  }

}
