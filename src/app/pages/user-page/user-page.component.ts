import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalDialogBoxBuilder } from 'src/app/common-dialog-boxes/common-modal-dialog-box-builder.class';
import { IUpdatedUser } from 'src/app/interfaces/updated-user.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  user?: IUser;
  updatedAt?: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

  editUser() {
    const modalRef = this.modalService.open(EditUserComponent, {
      size: 'md',
    });
    (modalRef.componentInstance as EditUserComponent).user = { ...this.user! };
    this.performResultModal(modalRef);
  }

  private performResultModal(modalRef: NgbModalRef): void {
    modalRef.closed.subscribe((res) => {
      this.createSuccesModalAlert({
        text: `Successful user update. result body: ${JSON.stringify(res)}`,
      });
      this.updatedAt = (res as IUpdatedUser).updatedAt;
      this.user = { ...this.user, ...res };
      this.cd.detectChanges();
    });
  }

  private createSuccesModalAlert({ header = 'Succes', text = '' }): void {
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder.addHeader(header).addText(text).setSuccessStyle().openAlertModal();
  }
}
