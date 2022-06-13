import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
    posts:any
  constructor(
    private http: HttpClient
  ) { }
      onDel(id:number) {
        this.http.delete("http://localhost:3001/posts/" + id).subscribe((data) => {
          
      })
      }
  ngOnInit(): void {
    this.http.get("http://localhost:3001/posts").subscribe((data) => {
        this.posts = data
    })
  }

}
