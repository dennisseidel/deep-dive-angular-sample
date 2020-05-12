import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthinsurance-price-calculator';
  price = '';

  onButtonClick() {
    this.price = '40';
  }
}
