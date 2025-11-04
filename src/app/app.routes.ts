import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailsComponent } from './features/products/components/product-details/product-details.component';
import { CartComponent } from './features/cart/cart.component';





export const routes: Routes = [
  { path: '', component: ProductsComponent, data: { breadcrumb: 'Продукты' } },
  { path: 'product/:id', component: ProductDetailsComponent, data: { breadcrumb: 'Детали продукта' } },
  {path: 'cart', component: CartComponent, data: { breadcrumb: ' Корзина'} }
 
];
