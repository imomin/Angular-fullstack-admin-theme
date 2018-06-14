// import { Component } from '@angular/core';

// @Component({
//     selector: 'app',
//     template: require('./app.component.html'),
//     // template: `<navbar></navbar>
//     // <router-outlet></router-outlet>
//     // <footer></footer>`
// })
// export class AppComponent {}


import { Component } from '@angular/core';
import { AuthService } from '../components/auth/auth.service';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
})

export class AppComponent{
    isLoggedIn;
    isLoggedIn$;
    AuthService;
    currentUser;
    static parameters = [AuthService];
    constructor(private authService: AuthService) {
        this.AuthService = authService;
        this.AuthService.currentUserChanged.subscribe(user => {
            this.currentUser = user;
            this.reset();
        });
        this.isLoggedIn$ = this.AuthService.isLoggedIn();
    }
    reset() {
        this.AuthService.isLoggedIn().then(is => {
            this.isLoggedIn = is;
        });
    }
    
}
