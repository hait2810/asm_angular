import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any
  constructor(
    private http: HttpClient,
   
  ) { }

  ngOnInit(): void {
    this.getAbout()
  }
  getAbout() {
      return this.http.get("http://localhost:3001/info/1").subscribe((data) => {
        this.about = data
        
      })
  }
  downloadcv(cv:any) {
    window.location=cv
   
    
  }
}
