import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:any= {
    email: "",
    password: ""
  }
  exitsUser:any
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.exitsUser = localStorage.getItem("user");
    if(this.exitsUser) {
        this.router.navigate([`/`])
    }
  }
  
  
  onSignin() {
    this.http.post("http://localhost:3001/signin", this.user).subscribe((data) => {
      localStorage.setItem("user", JSON.stringify(data))
      this.router.navigate([`/`])
})
  }
}
