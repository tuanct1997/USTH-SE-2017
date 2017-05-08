import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HotSpotService } from './hotspot.service';
import { HotSpotComponent } from './hotspot.component';

@NgModule({
  imports:      [ 
    BrowserModule 
  ],

  declarations: [ 
    AppComponent,
    HotSpotComponent,
  ],

  bootstrap:    [ 
    AppComponent 
  ],

  providers: [
    HotSpotService
  ],

})
export class AppModule { }
