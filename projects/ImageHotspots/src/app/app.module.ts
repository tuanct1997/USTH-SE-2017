import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HotSpotComponent } from './hotspot.component';

import { HotSpotService } from './hotspot.service';
import { PopUpService } from './popup.service';

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
    HotSpotService,
	PopUpService,
  ],

})
export class AppModule { }
