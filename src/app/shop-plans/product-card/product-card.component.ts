import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() products = '';
  selectedProduct = -1;

  constructor() { }

  onClick(index: number) {
    this.selectedProduct = index
  }

  ngOnInit(): void {
  }

}
