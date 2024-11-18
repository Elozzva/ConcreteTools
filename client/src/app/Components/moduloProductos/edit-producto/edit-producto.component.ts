import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Producto } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  Producto:any;
  ProductoObservable: Observable<any>= new Observable;
  showPhoto:boolean=true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private Rest: RestService, 
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const url:string = 'https://api-concretetools.herokuapp.com/api/producto/'+params["id"];
      //console.log(url);

      this.ProductoObservable = this.Rest.get(url);
      this.ProductoObservable.subscribe( element =>{
        console.log(element.Producto);

        this.Producto=element.Producto;
      });
    });
  }

  actualizarProducto = () => {
    this.Producto.Precio = Number(this.Producto.Precio);
    this.Rest.put('http://localhost:3768/api/productos/'+this.Producto._id, this.Producto)

    .subscribe(res => {
      console.log(res);
      alert('Actualizado correctamente.');
      this.router.navigate(['admin-productos']);
  });
  }

  eliminarFoto = () => {
    this.showPhoto = !this.showPhoto;
  }

}
