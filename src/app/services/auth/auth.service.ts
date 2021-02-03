import { EmailPasswordPair } from './../../model/emailpasswordPair';
import { NewAccount } from './../../model/new-acount';
import { User } from './../../model/user';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Router } from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData: any;
  constructor(public firestore: AngularFirestore,private fbAuth: AngularFireAuth, private zone:NgZone, private router:Router) {

    this.fbAuth.authState.subscribe(user =>{
      if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
      }
      else{
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
      }
  })
}

signUp(user:NewAccount){
  return this.fbAuth.createUserWithEmailAndPassword(user.email, user.password)
  .then(result =>{
    this.SendVerificationMail();
    this.zone.run(() =>{
      this.router.navigate(['/profile'])
    })
    this.setUserData(result.user);
  })
  .catch((err) => {window.alert("Authentication failed")})
}

login(user:EmailPasswordPair){
  return this.fbAuth.signInWithEmailAndPassword(user.email, user.password)
  .then(result =>{
    this.zone.run(() =>{
      this.router.navigate(['/profile'])
    })
    this.setUserData(result.user);
  })
  .catch((err) => {window.alert(`Authentication failed: ${err}`)})
}

loginWithGoogle(){
  return this.fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(result =>{
    this.zone.run(() =>{
      this.router.navigate(['profile'])
    })
    this.setUserData(result.user);
  })
  .catch((err) => {window.alert(`Authentication failed: ${err}`)})
}

get isLoggedIn(){
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

logOut(){
  this.fbAuth.signOut()
  .then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['top-stories']);
  })
  
}

// Reset Forggot password
ForgotPassword(passwordResetEmail) {
  return this.fbAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}

// Send email verfificaiton when new user sign up
async SendVerificationMail() {
  return (await this.fbAuth.currentUser).sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email-address']);
  })
}

setUserData(user){
  const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
}
}
