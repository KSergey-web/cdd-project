import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModalDialogBoxBuilder } from 'src/app/common-dialog-boxes/common-modal-dialog-box-builder.class';
import { IPaginationInfo } from 'src/app/interfaces/pagination-info.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  paginationInfo: IPaginationInfo = {};
  selectedPage: number = 1;

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUsers({ per_page: 4 });
  }

  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  onChangePage(): void {
    if (this.selectedPage == this.paginationInfo.page) return;
    this.getUsers({
      page: this.selectedPage,
      per_page: this.paginationInfo.per_page,
    });
  }

  private getUsers(paginationInfo: IPaginationInfo = {}) {
    this.userService
      .getUsers(paginationInfo)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(({ users, paginationInfo }) => {
        this.users = users;
        this.paginationInfo = paginationInfo;
        this.cd.detectChanges();
      });
  }

  onDeleteUser(user: IUser, ind: number) {
    this.userService
      .deleteUser(user)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: () => {
          const text = `user with id ${user.id} deleted`;
          this.createSuccesModalAlert({ text });
          this.deleteUserFromList(ind);
        },
      });
  }

  private deleteUserFromList(ind: number) {
    this.users.splice(ind, 1);
    this.cd.detectChanges();
  }

  private createSuccesModalAlert({ header = 'Succes', text = '' }) {
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder.addHeader(header).addText(text).setSuccessStyle().openAlertModal();
  }
}
