import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-category-post',
  templateUrl: './get-category-post.component.html',
  styleUrls: ['./get-category-post.component.css']
})
export class GetCategoryPostComponent implements OnInit {
  posts:any
  id:any
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    const api = "http://localhost:3001/categoryPosts/"+this.id+"/posts";
    this.http.get(api).subscribe((data) => {
      this.posts = data
      console.log(data);
      
      })
  }

}
