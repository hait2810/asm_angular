import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}
  public Editor = ClassicEditor;
  category:any
  post:any
  id:any
  constructor(
    private http:HttpClient,
    private router: ActivatedRoute
  ) { }
  onEditPost() {
        this.http.put("http://localhost:3001/posts/"+ this.id, this.post).subscribe((data) => {
          
        })
  }
  ngOnInit(
   
  ): void {
    this.id = this.router.snapshot.params['id'];
    this.http.get("http://localhost:3001/categoryPosts").subscribe((data) => {
        this.category = data
    })
    this.http.get("http://localhost:3001/posts/"+ this.id).subscribe((data) => {
      this.post = data
    })
  }

}
