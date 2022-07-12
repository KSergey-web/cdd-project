import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { StyleDialogDirective } from './style-dialog.directive';

@NgModule({
  declarations: [AlertComponent, StyleDialogDirective],
  imports: [CommonModule],
  exports: [AlertComponent, StyleDialogDirective],
})
export class CommonDialogBoxesModule {}
