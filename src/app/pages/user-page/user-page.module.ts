import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  exports: [],
  declarations: [UserPageComponent, EditUserComponent],
  providers: [],
})
export class UserPageModule {}
