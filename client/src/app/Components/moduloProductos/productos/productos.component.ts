import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Productos: any;

  constructor(private Rest: RestService, private _router:Router) { }

  async ngOnInit(): Promise<void> {
    await this.getProductos();
  }

   getProductos = async() => {
    await this.Rest.get(`https://api-concretetools.herokuapp.com/api/productos`).subscribe((respuesta:any) => {
      this.Productos = respuesta.Productos;
      //console.log(`Productos =>>>`,respuesta);
    });
  }

  openProducto = (id:string) => {
    this._router.navigate( ['/producto', id]);
  }

}
