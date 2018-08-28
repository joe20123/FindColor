import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchcolorComponent } from './searchcolor.component';

@NgModule({
    declarations: [SearchcolorComponent],
    imports: [ CommonModule, FormsModule ],
    exports: [ SearchcolorComponent ],
    providers: [],
})
export class SearchColorModule {
}
