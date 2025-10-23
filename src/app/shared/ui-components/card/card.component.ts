import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../../services/products.service';
import { inject } from '@angular/core';
import { ICard } from '../../models/card';
import { ActivatedRoute } from '@angular/router';

import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CurrencyPipe,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  productService = inject(ProductsService);
  route = inject(ActivatedRoute);
  cardId: string | null = null;
  product = signal<ICard | null>(null);

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductById(this.cardId).subscribe((res: ICard) => {
      console.log(res);
      this.product.set(res);
    });
  }
}
