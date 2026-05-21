import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})

export class Tab3Page implements OnInit {

  products: any[] = [];
  showProducts = false;

  constructor(
    private productService: ProductsService
  ) {
    addIcons({ cartOutline });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      }
    });
  }

  toggleProducts(): void {
    this.showProducts = !this.showProducts;
  }

}
