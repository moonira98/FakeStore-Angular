import { Component, Input, signal, inject} from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import { UiCardComponent } from '../../../../shared/ui-components/ui-card/ui-card.component';
import { RouterLink } from "@angular/router";
import { ProductsService } from '../../../../services/products.service';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [UiCardComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  productsService = inject(ProductsService)
    @Input() product!: IProduct;
    cart = signal<IProduct[]>([]);
    cartService = inject(CartService)
  

    
    
   addProductToBucket(product: IProduct) {
      this.cartService.addToBucket(product)
    }

    
}
