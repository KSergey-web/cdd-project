import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserPageComponent } from './user-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [],
  declarations: [UserPageComponent, EditUserComponent],
  providers: [],
})
export class UserPageModule {}
