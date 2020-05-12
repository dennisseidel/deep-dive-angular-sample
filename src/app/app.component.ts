import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coverageStart = '';
  coverageScope = '';
  zip = '';
  birthdate = '';
  price = '';

  onChangeCoverageStart(value: string) {
    this.coverageStart = value;
  }

  onChangeCoverageScope(value: string) {
    this.coverageScope = value;
  }

  onChangeZip(value: string) {
    this.zip = value;
  }

  onChangeBirthdate(value: string ) {
    this.birthdate = value;
  }

  onButtonClick() {
    this.price = '40';
  }
}
