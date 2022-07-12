import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonDialogBoxesModule } from 'src/app/widgets/common-dialog-boxes/common-dialog-boxes.module';
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonDialogBoxesModule,
  ],
  exports: [],
  declarations: [SigninComponent],
  providers: [],
})
export class SigninModule {}
