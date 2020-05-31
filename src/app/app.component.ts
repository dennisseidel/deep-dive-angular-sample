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
  governmentSubside = false;
  products = [];

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

  onChangeGovernmentSubsides() {
    this.governmentSubside = !this.governmentSubside;
  }

  getProducts(coverageStart: string, coverageScope: string, zip: string, birthdate: string, governmentSubside?: boolean) {
    return {
      products: [
        {
          name: 'Simple Bronze LOWEST PREMIUM',
          desciption: 'If you rarely see a doctor, this low-cost plan could work for you.',
          use: 'Basic Use: Good for infrequent medical needs',
          outOfPocketMaximum: '8150',
          deductable: '8150',
          monthlyPremium: '533.88'
        },
        {
          name: 'Saver Bronze',
          desciption: 'If you have minimal health care needs, this plan could work for you.',
          use: 'Basic Use: Good for infrequent medical needs',
          outOfPocketMaximum: '7200',
          deductable: '7200',
          monthlyPremium: '536.74'
        },
        {
          name: 'Classic Silver BEST SELLING',
          desciption: 'Great plan if you want affordable prescription drugs starting day 1.',
          use: 'Regular Use: Good for occasional medical needs',
          outOfPocketMaximum: '7900',
          deductable: '1300',
          monthlyPremium: '728.12'
        },
        {
          name: 'Classic Gold',
          desciption: 'This plan has a reasonable deductible and great prescription drugs benefits.',
          use: 'Frequent Use: Good for high medical needs',
          outOfPocketMaximum: '4000',
          deductable: '600',
          monthlyPremium: '919.47'
        },
      ]
    }
  }

  onButtonClick() {
    this.products = this.getProducts(this.coverageStart, this.coverageScope, this.zip, this.birthdate, this.governmentSubside).products;
    console.log(this.products)
  }
}
