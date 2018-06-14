// @flow
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../components/auth/auth.service';

interface User {
    name: string;
    email: string;
    password: string;
}

@Component({
    selector: 'login',
    template: require('./login.html'),
})
export class LoginComponent {
    user: User = {
        name: '',
        email: '',
        password: '',
    };
    errors = {login: undefined};
    submitted = false;
    AuthService;
    Router;
    Route


    static parameters = [AuthService, Router, ActivatedRoute];
    constructor(_AuthService_: AuthService, router: Router, Route: ActivatedRoute) {
        this.AuthService = _AuthService_;
        this.Router = router;
        this.Route = Route;

    }

    login(form) {
        if(form.invalid) return;

        return this.AuthService.login({
            email: this.user.email,
            password: this.user.password
        })
            .then(() => {
                // Logged in, redirect to home
                let returnUrl = this.Route.snapshot.queryParams['returnUrl'] || '/home';
                this.Router.navigateByUrl(returnUrl);

            })
            .catch(err => {
                this.errors.login = err.json().message;
            });
    }
}
