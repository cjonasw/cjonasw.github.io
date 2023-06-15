import { Component } from '@angular/core';
import json from './cv.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cv: any = json;

  constructor() {
  }

}
