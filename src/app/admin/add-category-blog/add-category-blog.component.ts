import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category-blog',
  templateUrl: './add-category-blog.component.html',
  styleUrls: ['./add-category-blog.component.css']
})
export class AddCategoryBlogComponent implements OnInit {
  category: any = {
   
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onAddCategory() {
    return this.http.post("http://localhost:3001/categoryPosts", this.category).subscribe((data) => {

    })
}

}
