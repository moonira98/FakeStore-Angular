import { Component, Input, signal, inject} from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import { UiCardComponent } from '../../../../shared/ui-components/ui-card/ui-card.component';
import { RouterLink } from "@angular/router";
import { ProductsService } from '../../../../services/products.service';

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

  

    
    
   addProductToBucket(product: IProduct) {
  this.cart.update((currentCart) => {
    const existingItem = currentCart.find((i) => i.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      currentCart.push(product);
    }

    console.log('Cart inside update:', currentCart); 
    return currentCart;
  });
}

    
}
