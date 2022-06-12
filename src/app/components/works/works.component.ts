import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works:any
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getWorks()
  }
  getWorks() {
    this.http.get("http://localhost:3001/works?_expand=categoryWork").subscribe((data) => {
        this.works = data
    })
  }

}
