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
    @Input() product!: IProduct
    products = signal<IProduct[]>([])

  

    getProducts () {
        this.productsService.getProducts().subscribe((res: IProduct[]) => {
          this.products.set(res) 
        })
    }
    
    addProductToBucket(id: number) {
      
      this.products.update(products =>
        products.map(p =>
          p.id === id ? { ...p, be: !p.be } : p
        )
      );

    
      this.productsService.changeProduct(this.products()[id]).subscribe(res => {
        console.log('Updated product:', res);
      });
    
    }
    
}
