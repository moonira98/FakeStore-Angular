import { Component, inject} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UiCardComponent } from '../../shared/ui-components/ui-card/ui-card.component';
import { IProduct } from '../../shared/models/card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService)
  cart = this.cartService.cart

 
  removeProduct(productId: number) {
    this.cartService.removeProduct(productId)
  }
}
