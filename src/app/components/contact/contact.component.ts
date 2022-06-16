import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any = {
    title: "",
    fullname: "",
    email: "",
    content: ""
  }
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  onContact() {
      this.http.post("http://localhost:3001/contacts", this.contact).subscribe((data) => {
          alert("Gửi thành công")
      })
      
  }

}
