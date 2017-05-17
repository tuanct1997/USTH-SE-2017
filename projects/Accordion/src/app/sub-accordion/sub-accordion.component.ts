import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: '[sub-accordion]',
  styleUrls: [ './sub-accordion.component.css' ],
  templateUrl: './sub-accordion.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubAccordionComponent {
    public subId: string;

    @Input() public title;
    @Input() public content;

    constructor() {
        const uuidV4 = require('uuid/v4');
        this.subId = uuidV4();
    }
}
