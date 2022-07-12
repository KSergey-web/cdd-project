import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharePipesModule } from 'src/app/share-pipes/share-pipes.module';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [CommonModule, NgbPaginationModule, SharePipesModule],
  exports: [],
  declarations: [MainPageComponent, ListResourceComponent, ListUsersComponent],
  providers: [],
})
export class MainPageModule {}
