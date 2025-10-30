import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductsService } from '../../services/products.service';
import { inject } from '@angular/core';
import { IProduct } from '../../shared/models/card';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ProductCardComponent } from './components/product-card/product-card.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, CurrencyPipe, RouterLink, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsService = inject(ProductsService)
  products = signal<IProduct[]>([])

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res: IProduct[]) => {
      console.log(res)
      this.products.set(res)
    })
  }




}
