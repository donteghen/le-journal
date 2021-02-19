import { VerifyEmailComponent } from './authComponents/verify-email/verify-email.component';
import { ProfileComponent } from './authComponents/profile/profile.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { LoginComponent } from './authComponents/login/login.component';

import { environment } from './../environments/environment';
import { ServicesModule } from './services/services.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AgoPipe } from './shared/ago.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, AgoPipe, LoginComponent, RegisterComponent, ProfileComponent, VerifyEmailComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServicesModule, CommonModule, FormsModule, ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule, AngularFireAuthModule,
  StoreModule.forRoot({}, {}), 
  ],
  providers: [
    StatusBar,
    SplashScreen, InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
