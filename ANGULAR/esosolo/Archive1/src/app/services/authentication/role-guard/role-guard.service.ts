import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { IsAuthenticatedService } from '../isAuthenticated/is-authenticated.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public router: Router, public isAuth: IsAuthenticatedService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.isAuth.isRole() != route.data.expectedRole) {
      this.router.navigate(['/onboarding/signin']);

      return false;
    }
    return true;
  }
}
