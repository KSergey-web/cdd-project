import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonDialogBoxesModule } from 'src/app/common-dialog-boxes/common-dialog-boxes.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonDialogBoxesModule,
  ],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {}
