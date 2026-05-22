import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';

import { ProductsService } from '../services/products';

import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    MatButtonModule
  ]
})
export class Tab3Page implements OnInit {

  products: any[] = [];
  show = false;

  constructor(private service: ProductsService) {

    // ícone do carrinho
    addIcons({
      'cart-outline': cartOutline
    });

  }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.error('Erro ao carregar produtos:', err)
    });
  }

  toggle() {
    this.show = !this.show;
  }
}
