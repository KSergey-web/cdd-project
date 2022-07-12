import { NgModule } from '@angular/core';
import { FioPipe } from './fio/fio.pipe';
@NgModule({
  declarations: [FioPipe],
  exports: [FioPipe],
})
export class SharePipesModule {}
