import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public ruta = 'https://969rgz78f9.execute-api.us-east-1.amazonaws.com/dev/api/'
  constructor(public http:HttpClient) {
    
  
  }

  getCategories(){
   return this.http.get(`${this.ruta}categories`)
  }
  
  getStores(){
   return this.http.get(`${this.ruta}stores`)
  }
  getPromos(){
   return this.http.get(`${this.ruta}promos`)
  }

  getStore(id){
    return this.http.get(`${this.ruta}stores/${id}`)
   }

 /*   login(p){
    return this.http.get(`${this.ruta}stores/${p}`)
   } */
}
