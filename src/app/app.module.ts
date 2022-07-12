import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './pages/main-page/main-page.module';
import { SigninModule } from './pages/signin/signin.module';
import { SignupModule } from './pages/signup/signup.module';
import { UserPageModule } from './pages/user-page/user-page.module';
import { API_URL } from './urls-tokens';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SignupModule,
    SigninModule,
    MainPageModule,
    UserPageModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.serverAddres,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
