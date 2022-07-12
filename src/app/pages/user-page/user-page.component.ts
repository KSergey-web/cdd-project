import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModalDialogBoxBuilder } from 'src/app/common-dialog-boxes/common-modal-dialog-box-builder.class';
import { IUpdatedUser } from 'src/app/interfaces/updated-user.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  user?: IUser;
  updatedAt?: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

  editUser() {
    const modalRef = this.modalService.open(EditUserComponent, {
      size: 'lg',
    });
    (modalRef.componentInstance as EditUserComponent).user = { ...this.user! };
    this.performResultModal(modalRef);
  }

  private performResultModal(modalRef: NgbModalRef): void {
    modalRef.closed.subscribe((res) => {
      this.createSuccesModalAlert({
        text: `Success update user. result body: ${JSON.stringify(res)}`,
      });
      this.updatedAt = (res as IUpdatedUser).updatedAt;
      this.user = { ...this.user, ...res };
    });
  }

  private createSuccesModalAlert({ header = 'Succes', text = '' }): void {
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder.addHeader(header).addText(text).setSuccessStyle().openAlertModal();
  }
}
