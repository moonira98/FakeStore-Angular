import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICard } from '../shared/models/card';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl

  constructor() { }

  getProducts(): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.apiUrl}`)
  }

  getProductById (id: string | null):Observable<ICard> {
      return this.http.get<ICard>(`${this.apiUrl}/${id}`)
  }
}
