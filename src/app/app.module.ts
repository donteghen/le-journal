
import { environment } from './../environments/environment';
import { ServicesModule } from './services/services.module';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [AppComponent, AgoPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServicesModule,
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
