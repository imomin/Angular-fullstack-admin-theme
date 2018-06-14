import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    authService;

    static parameters = [Router, AuthService];
    constructor(protected router: Router, authService: AuthService) {
        this.authService = authService;
    }

    //http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial#auth-guard-ts
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.authService.isLoggedIn();
        if (localStorage.getItem('id_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
