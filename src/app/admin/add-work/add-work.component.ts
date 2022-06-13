import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';


@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})

export class AddWorkComponent implements OnInit {
  linkimg: any;
  public files: any;
  CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/hait-10/image/upload';
  CLOUDINARY_PRESET = 'assjshihi';
  
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
  public Editor = ClassicEditor;
  project:any = {
  }
  
  category:any
  constructor(
    private http: HttpClient
  ) { }
  onFileChanged(event: any) {
    this.files = event.target.files[0];
  }
  onAddWork() {
    const formData = new FormData();
    formData.append('file', this.files, this.files.name);
    formData.append('upload_preset', this.CLOUDINARY_PRESET);
    const d = new Date().getFullYear();
    
    this.http.post(this.CLOUDINARY_API, formData).subscribe((data) => {
      this.linkimg = data;
      const project = {
        ...this.project, createAt: d, img: this.linkimg.url
      }
      this.http.post("http://localhost:3001/works", project).subscribe(() => {
      console.log("hj");
      
    }
    )
    })
    
    
  }
  ngOnInit(): void {
        this.getCategorys()
        this.files = []
  }

  getCategorys() {
    this.http.get("http://localhost:3001/categoryWorks").subscribe((data) => {
      this.category = data
      
      
    })
  }
 
  
}
