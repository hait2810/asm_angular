import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  id:any
  work:any
 
  constructor(
    private http:HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    const urlapi = "http://localhost:3001/works/"+this.id+"?_expand=categoryWork";
   
    
    this.http.get(urlapi).subscribe(  (data) => {
    
      
      this.work =  data
      
      
      
      
    })
  }

}
