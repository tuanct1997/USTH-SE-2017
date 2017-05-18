import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotspotComponent } from './hotspot.component';
import { PopUpComponent } from './popup.component';

import { HotspotService } from './hotspot.service';
import { HotspotService } from './popup.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],

  declarations: [
    AppComponent,
    HotspotComponent,
    PopUpComponent,
  ],

  providers: [
    HotspotService,
    HotspotService,
  ],

  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
