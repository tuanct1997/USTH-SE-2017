import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <my-hotspot></my-hotspot>
  `,
})
export class AppComponent  { 
  title = 'Image Hotspot';
}
