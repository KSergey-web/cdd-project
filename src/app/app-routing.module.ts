import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from './guards/user.resolver';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', component: MainPageComponent },
  {
    path: 'user/:id',
    component: UserPageComponent,
    resolve: { user: UserResolver },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
