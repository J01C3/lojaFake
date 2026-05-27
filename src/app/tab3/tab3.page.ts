import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';

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

    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon
  ]
})
export class Tab3Page implements OnInit {

  products: any[] = [];
  show = false;

  constructor(private service: ProductsService) {

    addIcons({
      'cart-outline': cartOutline
    });

  }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) =>
        console.error('Erro ao carregar produtos:', err)
    });
  }

  toggle() {
    this.show = !this.show;
  }
}
