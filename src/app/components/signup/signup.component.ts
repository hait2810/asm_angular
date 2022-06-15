import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {
    email: "",
    password: ""
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onSignup() {
      this.http.post("http://localhost:3001/signup",this.user).subscribe((data) => {
            console.log(this.user);
            
      })
  }

}
