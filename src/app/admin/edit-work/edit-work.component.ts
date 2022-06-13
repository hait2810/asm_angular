import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {
  project:any
  category:any
  id:any
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
    this.http.get("http://localhost:3001/categoryWorks").subscribe((data) => {
        this.category = data
    })
    this.id = this.router.snapshot.params['id'];
    this.http.get("http://localhost:3001/works/"+this.id).subscribe((data) => {
        this.project = data
    })
  }
  onEditWork() {
        this.http.put("http://localhost:3001/works/"+this.id, this.project).subscribe((data) => {
          console.log("hihi");
          
        })
  }

}
