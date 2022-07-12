import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
  exports: [],
  declarations: [UserPageComponent, EditUserComponent],
  providers: [],
})
export class UserPageModule {}
