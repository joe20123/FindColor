import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FetchColorService } from '../Services/fetchcolor.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ColorSchema } from '../model/color';

@Component({
  selector: 'app-searchcolor',
  templateUrl: './searchcolor.component.html',
  styleUrls: ['./searchcolor.component.css']
})
export class SearchcolorComponent implements OnInit {

  colorlist: Observable<ColorSchema[]>;
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

  performSearchOnShowName(term: string) {
    this.searchterm.next(term);
  }

}
