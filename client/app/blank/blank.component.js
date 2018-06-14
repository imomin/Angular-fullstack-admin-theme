import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blank',
    encapsulation: ViewEncapsulation.None,
    template: require('./blank.html'),
    styles: [require('./blank.scss')],
})
export class BlankComponent {
    message/*: string*/;

    static parameters = [];
    constructor() {
        this.message = 'hello';
    }
}
