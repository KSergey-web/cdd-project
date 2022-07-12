import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonDialogBoxesModule } from 'src/app/common-dialog-boxes/common-dialog-boxes.module';
import { SharePipesModule } from 'src/app/share-pipes/share-pipes.module';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    CommonDialogBoxesModule,
    SharePipesModule,
  ],
  exports: [],
  declarations: [SigninComponent],
  providers: [],
})
export class SigninModule {}
