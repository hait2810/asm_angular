import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  category:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getCategorys();
  }
  post:any = {

  }
  getCategorys() {
    this.http.get("http://localhost:3001/categoryPosts").subscribe((data) => {
      this.category = data
      
      
    })
  }
  onAddPost() {
    const d = new Date().getFullYear();
    const project = {
      ...this.post, createAt: d
    }
    this.http.post("http://localhost:3001/posts", project).subscribe(() => {
      console.log("hj");
      
    })
  }

}
