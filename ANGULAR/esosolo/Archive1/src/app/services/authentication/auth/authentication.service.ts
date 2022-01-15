import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IsAuthenticatedService } from '../isAuthenticated/is-authenticated.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements CanActivate {
  constructor(public router: Router, public isAuth: IsAuthenticatedService) {}

  canActivate(): boolean {
    if (!this.isAuth.isAuthenticated()) {
      // Route to sign in page if authentication fails
      this.router.navigate(['/onboarding/signin']);

      return false;
    }
    return true;
  }
}
