import { Component, ElementRef, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    menu = [{
        title: 'Home',
        'link': '/home',
    }];
    Router;
    isAdmin;
    isLoggedIn;
    currentUser = {};
    AuthService;
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    static parameters = [AuthService, Router, Location, ElementRef];
    constructor(private authService: AuthService, private router: Router, location: Location,  private element: ElementRef) {
        this.location = location;
        this.sidebarVisible = false;
        this.AuthService = authService;

        this.Router = router;

        this.reset();

        this.AuthService.currentUserChanged.subscribe(user => {
            this.currentUser = user;
            this.reset();
        });
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        // const navbar: HTMLElement = this.element.nativeElement;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    reset() {
        this.AuthService.isLoggedIn().then(is => {
            this.isLoggedIn = is;
        });
        this.AuthService.isAdmin().then(is => {
            this.isAdmin = is;
        });
        this.AuthService.getCurrentUser().then(user => {
            this.currentUser = user;
        });
    }

    logout() {
        return this.AuthService.logout().then(() => {
            this.Router.navigateByUrl('/login');
            this.reset();
        });
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
      }
}
