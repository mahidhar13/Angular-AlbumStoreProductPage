import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Album } from './album'
import { Product } from './product'

@Injectable()
export class ProductService {

  private _albumUrl:string = "../assets/album.json";
  private album: Album;
  private _productsUrl:string = "../assets/products.json";

  constructor(private _http: Http) { }

  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl)
    .map(response => this.album = <Album>response.json());
  }

  getProducts() {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }

}
