import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  posts:any
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.get2Post()
  }
  get2Post() {
    this.http.get("http://localhost:3001/posts?_expand=categoryPost&_limit=2").subscribe((data) => {
          this.posts = data;
    })
  }

}
