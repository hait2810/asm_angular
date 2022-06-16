import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSignup() {
      this.http.post("http://localhost:3001/signup",this.user).subscribe((data) => {
            console.log(this.user);
            this.toastr.success("Đăng ký thành công")
            alert("Đăng ký thành công")
            this.router.navigate([`/signin`])
            
      })
  }

}
