import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { throwIfEmpty } from 'rxjs';
@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {
  project:any
  category:any
  id:any
  linkimg: any;
  public files: any;
  CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/hait-10/image/upload';
  CLOUDINARY_PRESET = 'assjshihi';
  onFileChanged(event: any) {
    this.files = event.target.files[0];
  }
  constructor(
   private http: HttpClient,
   private router: ActivatedRoute
  ) { } 
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
  public Editor = ClassicEditor;
  ngOnInit(): void {
    this.files = []
    this.http.get("http://localhost:3001/categoryWorks").subscribe((data) => {
        this.category = data
    })
    this.id = this.router.snapshot.params['id'];
    this.http.get("http://localhost:3001/works/"+this.id).subscribe((data) => {
        this.project = data
    })
  }
  onEditWork() {
    const formData = new FormData();
    formData.append('file', this.files, this.files.name);
    formData.append('upload_preset', this.CLOUDINARY_PRESET);
    
    this.http.post(this.CLOUDINARY_API, formData).subscribe((data) => {
      this.linkimg = data;
      const project = {
        ...this.project, img: this.linkimg.url
      }
      this.http.put("http://localhost:3001/works/"+this.id, project).subscribe((data) => {
          console.log("hihi");
          
        })
    })
        
  }

}
