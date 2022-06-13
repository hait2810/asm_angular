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
  onAddWork() {
    const d = new Date().getFullYear();
    const project = {
      ...this.project, createAt: d
    }
    console.log(this.project);
    
    this.http.post("http://localhost:3001/works", project).subscribe(() => {
      console.log("hj");
      
    }
    )
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
