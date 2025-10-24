import { Component, Input, signal} from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import { UiCardComponent } from '../../../../shared/ui-components/ui-card/ui-card.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [UiCardComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    @Input() product!: IProduct
    bucketProducts = signal<IProduct[]>([])
  

    addProductToBucket(product: IProduct) {
      this.bucketProducts.update(current => [...current, product]);
      console.log(this.bucketProducts())
      }
}
