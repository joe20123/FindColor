import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchcolorComponent } from './searchcolor/searchcolor.component';
import { SearchColorModule } from './searchcolor/searchcolor.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchcolorComponent
  ],
  imports: [
    BrowserModule,
    SearchColorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
