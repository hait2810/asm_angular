import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category-work',
  templateUrl: './add-category-work.component.html',
  styleUrls: ['./add-category-work.component.css']
})
export class AddCategoryWorkComponent implements OnInit {
  
  category:any = {
    name: ""
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onAddCategory() {
      return this.http.post("http://localhost:3001/categoriesWorks", this.category).subscribe((data) => {

      })
  }

}
