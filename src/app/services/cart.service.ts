import { Injectable, signal } from '@angular/core';
import { IProduct } from '../shared/models/card';

const CART_STORE = 'cart'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart = signal<IProduct[]>(this.loadCart())
  

  addToBucket(product: IProduct) {
    this.cart.update((currentCart) => {
        const existingProduct = currentCart.find((p) => p.id === product.id)

        if(existingProduct) {
          existingProduct.quantity += product.quantity
        } else {
          currentCart.push(product)
        }

        
        this.saveToCart(currentCart)
        return currentCart
    })
  }


  saveToCart(cart: IProduct[]) {
    localStorage.setItem(CART_STORE, JSON.stringify(cart))
  }

  loadCart() {
    const saved = localStorage.getItem(CART_STORE)
    return saved ? JSON.parse(saved) : []
  }
}