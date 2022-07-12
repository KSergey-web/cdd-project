import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { CommonModalDialogBoxBuilder } from 'src/app/widgets/common-dialog-boxes/common-modal-dialog-box-builder.class';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.signupForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    const val = this.signupForm.value;
    this.authService
      .login(val)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.router.navigate(['']);
      }, this.errorResponseHandler.bind(this));
  }

  private errorResponseHandler(errRes: HttpErrorResponse) {
    const textError = `status: ${errRes.status}. Text: ${JSON.stringify(
      errRes.error
    )}`;
    this.createBadModalAlert({ text: textError });
  }

  private createBadModalAlert({ header = 'Error login', text = 'error' }) {
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    bulder.addHeader(header).addText(text).setDangerStyle().openAlertModal();
  }
}
