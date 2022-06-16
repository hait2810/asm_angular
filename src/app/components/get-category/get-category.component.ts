import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css']
})
export class GetCategoryComponent implements OnInit {
  works: any
  id:any
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    const api = "http://localhost:3001/categoryWorks/"+this.id+"/works";
    this.http.get(api).subscribe((data) => {
    this.works = data
   
    
    })
  }


}
