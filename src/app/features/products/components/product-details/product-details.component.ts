import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productsService = inject(ProductsService)
  route = inject(ActivatedRoute)
  productId = signal<null | string>(null)
  productSingle = signal<IProduct | null>(null)

 ngOnInit() {
  this.productId.set(this.route.snapshot.paramMap.get('id'))
  this.getProductById()
 }

 getProductById() {
  this.productsService.getProductById(this.productId()).subscribe((res: IProduct) => {
    console.log(res)
    this.productSingle.set(res)
    console.log(this.productSingle())
  })
 }

}
