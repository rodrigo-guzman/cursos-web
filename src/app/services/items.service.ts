import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

   getItems() {
     return this.http.get(`${this.API_URI}/`);
   }

   getItem(id: string) {
      return this.http.get(`${this.API_URI}/edit/${id}`);
   }

   deleteItem(id: string) {
      return this.http.delete(`${this.API_URI}/delete/${id}`);
    }

   saveItem(item: Item) {
      return this.http.post(`${this.API_URI}/add`, item);
   }

   updateItem(id: string|number, updateItem: Item): Observable<Item> {
      return this.http.put(`${this.API_URI}/edit/${id}`, updateItem);
   }

}
