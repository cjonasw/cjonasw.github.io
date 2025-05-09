import { Component } from '@angular/core';
import json from './cv.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cv: any = json;
  jsonView = false;

  sameCompanyAsNext(index: number, career: any[]) {
    if (index < career.length - 1) {
      return career[index].company.name === career[index + 1].company.name;
    }
    return false;
  }

  isDate(date: string) {
    return !isNaN(Date.parse(date));
  }

  downloadCV(){
    window.print();
  }

  toggleJSON() {
    this.jsonView = !this.jsonView;
  }

  constructor() {
  }

}


enum CVFormatSupported {
  PDF,
  JSON
}