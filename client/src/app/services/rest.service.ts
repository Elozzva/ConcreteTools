import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  get = (url:string)=>{
    return this.http.get(url);
  }

  post = (url:string, data:any)=>{
    /* let encabezado = new HttpHeaders(
      {'Content-Type':'application/json; charset=utf-8'}
    );
    encabezado.append('Access-Control-Allow-Headers', 'accept'); */
    return this.http.post(url, data); 
  }
  put = (url:string, data:any)=>{
    return this.http.put(url, data); 
  }

  del = (url:string)=>{
    return this.http.delete(url); 
  }

}
