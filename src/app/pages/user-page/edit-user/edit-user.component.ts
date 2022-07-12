import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModalDialogBoxBuilder } from 'src/app/common-dialog-boxes/common-modal-dialog-box-builder.class';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  @Input() user!: IUser;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuider: FormBuilder
  ) {
    this.userForm = formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }

  getDataFromForm(): Partial<IUser> {
    const partUser: Partial<IUser> = {};
    partUser.email = this.userForm.controls.email.value;
    partUser.first_name = this.userForm.controls.first_name.value;
    partUser.last_name = this.userForm.controls.last_name.value;
    partUser.avatar = this.userForm.controls.avatar.value;
    return partUser;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  initForm() {
    this.userForm.controls.email.setValue(this.user.email);
    this.userForm.controls.first_name.setValue(this.user.first_name);
    this.userForm.controls.last_name.setValue(this.user.last_name);
    this.userForm.controls.avatar.setValue(this.user.avatar);
  }

  onDissmis() {
    this.activeModal.dismiss();
  }

  SomeError(err: HttpErrorResponse) {
    console.error(err);
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder
      .addHeader('Error')
      .addText('Something went wrong')
      .setDangerStyle()
      .openAlertModal();
  }

  onSubmit() {
    const user = {
      ...this.user,
      ...this.getDataFromForm(),
    };
    this.userService
      .updateUser(user)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (res) => this.activeModal.close(res),
        error: this.handleError.bind(this),
      });
  }

  handleError(err: HttpErrorResponse) {
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder
      .addHeader('Error updating')
      .addText(`Error updating user ${err.status}. ${JSON.stringify(err)}`)
      .setDangerStyle()
      .openAlertModal();
  }
}
