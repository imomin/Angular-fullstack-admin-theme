import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'footer-cmp',
    template: require('./footer.html'),
    styles: [require('./footer.scss')]
})

export class FooterComponent {
    test : Date = new Date();
}
