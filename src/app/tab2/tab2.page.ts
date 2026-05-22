import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductsService } from '../services/products';

import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class Tab2Page implements OnInit {

  products: any[] = [];
  index = 0;

  constructor(private service: ProductsService) {

    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'cart-outline': cartOutline
    });

  }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.index = 0;
      },
      error: (err) => console.error(err)
    });
  }

  next() {
    if (this.index < this.products.length - 1) {
      this.index++;
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    }
  }
}
