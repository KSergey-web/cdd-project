import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPaginationInfo } from 'src/app/interfaces/pagination-info.interface';
import { IResource } from 'src/app/interfaces/resource.interface';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss'],
})
export class ListResourceComponent implements OnInit, OnDestroy {
  resources: IResource[] = [];
  paginationInfo: IPaginationInfo = {};
  selectedPage: number = 1;

  constructor(private resourceService: ResourceService) {}
  ngOnInit(): void {
    this.getResources({ per_page: 4 });
  }

  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  onChangePage(): void {
    if (this.selectedPage == this.paginationInfo.page) return;
    this.getResources({
      page: this.selectedPage,
      per_page: this.paginationInfo.per_page,
    });
  }

  private getResources(paginationInfo: IPaginationInfo = {}) {
    this.resourceService
      .getResources(paginationInfo)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(({ resources, paginationInfo }) => {
        this.resources = resources;
        this.paginationInfo = paginationInfo;
      });
  }
}
