import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdmin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService : AdminService, private route : Router) {} 
  
  loginForm = new FormGroup ({
    user : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.minLength(5)]),
    
  })

  public admin : IAdmin[] = [];

  ngOnInit(): void {
    this.adminService.admins().subscribe((data) =>{
      this.admin = data;
      console.warn(this.admin);
    })
  }

  loginUser() {
    console.warn(this.loginForm.value);
    for(let i=0; i< this.admin.length; i++) {
      if(this.admin[i].username == this.loginForm.value.user && this.admin[i].password == this.loginForm.value.password) {
          this.route.navigate(['/students']);
      } 
    }
    
  }

}
