import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
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

      const a = this.http.get('../assets/colors.json')
      .map(this.extractData)
      // .concatMap(arr => Observable.from(arr))
      .filter(o => {
          const na = o.name;
          const b = na.indexOf(term);
          return na && b > -1;
        })
      .catch(this.handleError);

      return a;
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.Color as ColorSchema[];
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
