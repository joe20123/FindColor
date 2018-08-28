import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchcolorComponent } from './searchcolor.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FetchColorService } from '../Services/fetchcolor.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@NgModule({
    declarations: [SearchcolorComponent],
    imports: [ CommonModule, FormsModule ],
    exports: [ SearchcolorComponent ],
    providers: [],
})
export class SearchColorModule implements OnInit {

    colorlist: Observable<any[]>;
    searchterm = new Subject<any>();

    constructor(private colorservice: FetchColorService,
                private router: Router) {

                }

    ngOnInit() {
        this.colorlist = this.searchterm
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(term => term
                            ? this.colorservice.getColorListByKeyword(term)
                            : Observable.of<any[]>([]))
                          .catch(error => {
                            console.log(error);
                            return Observable.of<any[]>([]);
                          });
    }


}
