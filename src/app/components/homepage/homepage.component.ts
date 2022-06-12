import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
