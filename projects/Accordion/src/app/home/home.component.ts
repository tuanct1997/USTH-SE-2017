import {
  Component
} from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  template:
  `
    <accordion>
    <div sub-accordion *ngFor="let i of data" title="{{i.title}}" content="{{i.body}}"></div>
    </accordion>
  `
})
export class HomeComponent {
public data;

  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => this.data = res.json());
  }
}
