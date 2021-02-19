import { EmailPasswordPair } from './../../model/emailpasswordPair';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
form : NgForm;
email: string;
password: string;
  constructor(private authService:AuthService,private router: Router) { }

  login(form){
    if(form.valid){
      var emailpassword:  EmailPasswordPair = {
        email : form.value.email,
        password : form.value.password
      }
      this.authService.login(emailpassword).then(result => console.log("moving"));
     
    }
  }

}
