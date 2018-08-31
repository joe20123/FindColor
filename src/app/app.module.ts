import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchColorModule } from './searchcolor/searchcolor.module';
import { FetchColorService } from './Services/fetchcolor.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchColorModule,
    AppRoutingModule,
    HttpModule,

  ],
  providers: [ FetchColorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
