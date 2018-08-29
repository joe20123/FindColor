import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/from';

import { ColorSchema } from '../model/color';


@Injectable()
export class FetchColorService {

    // use the follow website to generate json file
    //   http://www.convertcsv.com/csv-to-json.htm
    // references:
    // http://www.99colors.net/dot-net-colors
    // https://stackoverflow.com/questions/19187085/how-can-i-quickly-and-easily-convert-spreadsheet-data-to-json

    constructor(private http: Http) {}

    getColorListByKeyword(term: string): Observable<any[]> {

    // Rx.Observable.prototype.toArray():
    //   An observable sequence containing a single element with a list
    //   containing all the elements of the source sequence.

      const a = this.http.get('../assets/colors.json')
      .map((res: any) => res.json().Color as ColorSchema[])
      .concatMap(arr => Observable.from(arr)) // flattern array to elements
      .filter(p => p['name'].indexOf(term) > -1)
      .catch(this.handleError);
      return a.toArray(); // resemble elements into one array
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.Color || {};
    }

    private handleError(error: Response |any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.tostring();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
