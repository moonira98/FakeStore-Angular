import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductsService } from '../../../services/products.service';
import { inject } from '@angular/core';
import { ICard } from '../../../shared/models/card';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, CurrencyPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
   productsService = inject(ProductsService)
    products = signal<ICard[]>([])

    ngOnInit(): void {
      this.getProducts()
    }

    getProducts() {
      this.productsService.getProducts().subscribe((res: ICard[]) => {
        console.log(res)
        this.products.set(res)
      })
    }

}
