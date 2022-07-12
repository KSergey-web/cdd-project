import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonDialogBoxesModule } from 'src/app/common-dialog-boxes/common-dialog-boxes.module';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    CommonDialogBoxesModule,
    NgbModalModule,
  ],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {}
