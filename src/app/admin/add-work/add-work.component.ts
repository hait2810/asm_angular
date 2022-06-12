import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {
  project:any = {
  }
  public editor = ClassicEditor;
  category:any
  constructor(
    private http: HttpClient
  ) { }
  onAddWork() {
    const d = new Date().getFullYear();
    const project = {
      ...this.project, createAt: d
    }
    this.http.post("http://localhost:3001/works", project).subscribe(() => {
      console.log("hj");
      
    })
  }
  ngOnInit(): void {
        this.getCategorys()
  }

  getCategorys() {
    this.http.get("http://localhost:3001/categoryWorks").subscribe((data) => {
      this.category = data
      
      
    })
  }
 
  
}
