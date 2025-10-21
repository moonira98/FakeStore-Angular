import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductsService } from '../../../services/products.service';
import { inject } from '@angular/core';
import { ICard } from '../../../shared/models/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
    productsService = inject(ProductsService)
    product = signal<ICard[]>([])

    ngOnInit(): void {
      this.getProducts()
    }

    getProducts() {
      this.productsService.getProducts().subscribe((res: ICard[]) => {
        console.log(res)
        this.product.set(res)
      })
    }

  
}
