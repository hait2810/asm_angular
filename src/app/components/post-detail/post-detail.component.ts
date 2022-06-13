import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:any
  id:any
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.http.get("http://localhost:3001/posts/"+ this.id).subscribe((data) => {
      this.post = data
    })
  }

}
