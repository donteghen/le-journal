import { AuthService } from './../../services/auth/auth.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

user:User;

  constructor(public authSerive:AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authSerive.userData;
  }
 
}
