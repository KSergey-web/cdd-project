import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  private onDestroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router //private modalService: NgbModal
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
      .signup(val)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        () => {
          this.router.navigate(['']);
        }
        //this.errorResponseHandler.bind(this)
      );
  }

  // private errorResponseHandler(err: HttpErrorResponse) {
  //   switch (err.status) {
  //     case 400:
  //       const text =
  //         'Неверный логин или пароль. Проверьте правильность введенных данных и повторите попытку';
  //       this.createBadModalAlert({ text });
  //       break;
  //     default:
  //       this.createBadModalAlert({});
  //       break;
  //   }
  // }

  // createBadModalAlert({ header = 'Ошибка', text = 'Что-то пошло не так' }) {
  //   const bulder = new CommonModalDialogBoxBuilder(this.modalService);
  //   bulder.addHeader(header).addText(text).setDangerStyle().openAlertModal();
  // }
}
