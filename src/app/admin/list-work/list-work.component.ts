import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {
  works!:any 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWorks()
  }
  getWorks() {
    this.http.get("http://localhost:3001/works").subscribe((data) => {
      this.works = data
    })
  }
  onDel(id:number){

    this.http.delete("http://localhost:3001/works/"+id).subscribe((data) => {
           
                
    })
  }

}
