import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { CommonModalDialogBoxBuilder } from '../common-dialog-boxes/common-modal-dialog-box-builder.class';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<IUser> {
  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser> | Promise<IUser> | IUser {
    const id = route.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['subgroups']);
    }
    return this.getUser(+id!);
  }

  private getUser(id: number): Observable<IUser> {
    return this.userService
      .getUserById(id)
      .pipe(take(1), catchError(this.someError.bind(this)));
  }

  someError(err: HttpErrorResponse): Observable<any> {
    console.error(err);
    let text = 'something went wrong';
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    const ref = bulder
      .addHeader('Error')
      .addText(text)
      .setDangerStyle()
      .openAlertModal();
    ref.result.finally(() => this.router.navigate(['']));
    throw err;
  }
}
