import { Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-angular';
  product: Product = {
    name: 'san pham 1',
    price: 10000,
    quantity: 2
  }
}
