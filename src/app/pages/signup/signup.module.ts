import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {}
