import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankComponent } from './blank.component';
import { AuthGuard } from '../../components/auth/auth-guard.service';

export const ROUTES/*: Routes*/ = [
    { path: 'blank', component: BlankComponent, canActivate: [AuthGuard]  },
];


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
    ],
    declarations: [
        BlankComponent,
    ],
    exports: [
        BlankComponent,
    ],
})
export class BlankModule {}
