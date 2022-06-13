import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  id:any
  linkimg: any;
  public files: any;
  CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/hait-10/image/upload';
  CLOUDINARY_PRESET = 'assjshihi';
  onFileChanged(event: any) {
    this.files = event.target.files[0];
  }
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
  public Editor = ClassicEditor;
  category:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.files = []
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
    const formData = new FormData();
    formData.append('file', this.files, this.files.name);
    formData.append('upload_preset', this.CLOUDINARY_PRESET);
    
    const d = new Date().getFullYear();
    
    this.http.post(this.CLOUDINARY_API, formData).subscribe((data) => {
      this.linkimg = data
      const project = {
        ...this.post, createAt: d, img: this.linkimg.url
      }
      this.http.post("http://localhost:3001/posts", project).subscribe(() => {
        console.log("hj");
        
      })
    })
   
  }

}
