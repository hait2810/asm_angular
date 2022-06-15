import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypeWork } from 'src/app/models/works/works.component';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {
  works!:any[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWorks()
  }
  getWorks() {
    this.http.get<any[]>("http://localhost:3001/works").subscribe((data) => {
     console.log(data);
     this.works = data
     
    })
  }
  onDel(id:number){

    const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
    if(confirm) { 
      this.http.delete("http://localhost:3001/works/"+id).subscribe((data) => {
         this.works = this.works.filter(item => item.id !== id)  
                
    })
    }
  }

}
