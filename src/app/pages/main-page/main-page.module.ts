import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbModalModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SharePipesModule } from 'src/app/share-pipes/share-pipes.module';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbPaginationModule,
    SharePipesModule,
    NgbModalModule,
  ],
  exports: [],
  declarations: [MainPageComponent, ListResourceComponent, ListUsersComponent],
  providers: [],
})
export class MainPageModule {}
