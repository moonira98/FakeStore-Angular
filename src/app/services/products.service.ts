import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../shared/models/card';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}`)
  }

  getProductById (id: string | null):Observable<IProduct> {
      return this.http.get<IProduct>(`${this.apiUrl}/${id}`)
  }





}
