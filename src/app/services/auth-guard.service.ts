// Library Modules
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

// Services
import { UserAuthService } from '../auth/user-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: UserAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  setLocalUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLocalUser() {
    return localStorage.getItem('user');
  }

  removeLocalUser() {
    localStorage.removeItem('user');
  }

  checkLogin(url: string): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
