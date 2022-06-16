import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user:any = {}
   
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user")!)
    
  }
  onLogout() {
      localStorage.removeItem("user");
      this.user = null
      alert("Logout Success!")
      this.toastr.success('Logout Success!');

  }

}
