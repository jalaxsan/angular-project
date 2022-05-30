import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }

}