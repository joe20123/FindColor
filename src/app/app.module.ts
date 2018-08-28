import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchcolorComponent } from './searchcolor/searchcolor.component';
import { SearchColorModule } from './searchcolor/searchcolor.module';
import { FetchColorService } from './Services/fetchcolor.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchcolorComponent
  ],
  imports: [
    BrowserModule,
    SearchColorModule
  ],
  providers: [ FetchColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
