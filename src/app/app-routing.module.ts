import { ProfileComponent } from './authComponents/profile/profile.component';
import { VerifyEmailComponent } from './authComponents/verify-email/verify-email.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { LoginComponent } from './authComponents/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authGurd';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'top-stories',
    loadChildren: () => import('./top-stories/top-stories.module').then( m => m.TopStoriesModule)
  },
  {
    path:'top-stories/:id/comments',
    loadChildren : () => import('./comments/comments.module').then(m => m.CommentsModule)
  },
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'email-verify', component:VerifyEmailComponent},
  {path:'profile', canActivate:[AuthGuard], component:ProfileComponent},
  {
    path: '',
    redirectTo: '/top-stories',
    pathMatch: 'full'
  },
  {
    path:'**', redirectTo:'/top-stories'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
