import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  Producto:any;
  ProductoObservable: Observable<any>= new Observable;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private Rest: RestService) {

    this.activatedRoute.params.subscribe( params => {
      const url:string = 'https://api-concretetools.herokuapp.com/api/producto/'+params["id"];
      console.log(url);

      this.ProductoObservable = this.Rest.get(url);
      this.ProductoObservable.subscribe( element =>{
        console.log(element.Producto);
        
        this.Producto=element.Producto;
      });
    });
  }

  ngOnInit(): void {
  }

}
