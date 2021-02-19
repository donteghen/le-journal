import { NewAccount } from './../../model/new-acount';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  form: FormGroup;

  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  signUp(){
    if(this.form.valid){
      var newAcount : NewAccount = {
        name: this.name.value,
        email: this.email.value,
        password : this.password.value
      };
      this.authService.signUp(newAcount).then(result=> console.log("success"));
    }
  }
}
