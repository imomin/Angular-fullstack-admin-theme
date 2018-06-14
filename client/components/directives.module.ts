import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';


import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
// import { SidebarModule } from './sidebar/sidebar.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OauthButtonsComponent } from './oauth-buttons/oauth-buttons.component';
// import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        AuthModule,
        // SidebarModule,

        RouterModule,
    ],
    declarations: [
        // AdminLayoutComponent,
        NavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
        SidebarComponent,
    ],
    exports: [
        // AdminLayoutComponent,
        NavbarComponent,
        FooterComponent,
        OauthButtonsComponent,
        SidebarComponent,
    ]
})
export class DirectivesModule {}
