import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { SearchcolorComponent } from './searchcolor.component';

@NgModule({
    declarations: [SearchcolorComponent],
    imports: [ CommonModule, FormsModule, ClipboardModule ],
    exports: [ SearchcolorComponent ],
    providers: [],
})
export class SearchColorModule {
}
