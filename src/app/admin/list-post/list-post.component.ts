import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
    posts: any[] = []
  constructor(
    private http: HttpClient
  ) { }
      onDel(id:number) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
        if(confirm) { 
          this.http.delete("http://localhost:3001/posts/" + id).subscribe((data) => {
          this.posts = this.posts.filter(item => item.id !== id)
      })
        }
      }
  ngOnInit(): void {
    this.getPost()
  }
  getPost() {
    this.http.get<any[]>("http://localhost:3001/posts").subscribe((data) => {
        this.posts = data
    })
  }

}
