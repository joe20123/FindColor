import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-searchcolor',
  templateUrl: './searchcolor.component.html',
  styleUrls: ['./searchcolor.component.css']
})
export class SearchcolorComponent implements OnInit {

  colors: Observable<any[]>;

  constructor() { }

  ngOnInit() {

  }

}
