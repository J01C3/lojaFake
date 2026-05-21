import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProductsService } from '../services/products';

// 👇 IMPORT DO ÍCONE
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})

export class Tab2Page implements OnInit {

  products: any[] = [];
  index = 0;

  constructor(
    private productService: ProductsService
  ) {
    addIcons({ cartOutline });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {

    this.productService.getProducts().subscribe({

      next: (response: any[]) => {
        this.products = response;
      },

      error: (error: any) => {
        console.error('Erro ao carregar produtos:', error);
      }

    });

  }

  nextProduct(): void {
    if (this.index < this.products.length - 1) {
      this.index++;
    }
  }

  previousProduct(): void {
    if (this.index > 0) {
      this.index--;
    }
  }

}
