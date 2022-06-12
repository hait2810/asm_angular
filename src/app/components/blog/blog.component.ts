import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:any
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getBlog()
  }
  getBlog() {
    this.http.get("http://localhost:3001/posts?_expand=categoryPost").subscribe((data) => {
      this.blogs = data
    })

  }

}
