import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GdriveService } from './gdrive.service';
import { Http, HttpModule } from '@angular/http';
import {PopoverModule} from "ngx-popover";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    PopoverModule
  ],
  providers: [GdriveService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
