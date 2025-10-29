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
  counter = signal<number>(0)
  currentImageIndex = signal<number>(0)
  

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

 increment() {
  this.counter.update(counter => counter + 1)
 }

 decrement() {
  if (this.counter() <= 0) return;
  this.counter.update(counter => counter - 1)
 }

 nextImage() {
  const images = this.productSingle()!.image
    if(!this.productSingle()?.image) return

   this.currentImageIndex.set((this.currentImageIndex() + 1) % images.length)
 }

 prevImage() {
   const images = this.productSingle()!.image
    if(!this.productSingle()?.image) return
 this.currentImageIndex.set(
    (this.currentImageIndex()! - 1 + images.length) % images.length
  );
 }

  get currentImage(): string {
    return this.productSingle()!.image[this.currentImageIndex()] || '';
  }

}
