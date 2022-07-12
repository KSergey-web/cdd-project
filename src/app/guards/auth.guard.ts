import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CommonModalDialogBoxBuilder } from '../common-dialog-boxes/common-modal-dialog-box-builder.class';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.createModaL();
    this.router.navigate(['signin']);
    return false;
  }

  private createModaL(): void {
    let text = 'authentication required';
    const bulder = new CommonModalDialogBoxBuilder(this.modalService);
    const ref = bulder
      .addHeader('Error')
      .addText(text)
      .setDangerStyle()
      .openAlertModal();
  }
}
