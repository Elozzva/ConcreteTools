import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Producto } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-index-productos',
  templateUrl: './index-productos.component.html',
  styleUrls: ['./index-productos.component.css']
})
export class IndexProductosComponent implements OnInit {

  Productos: Producto[]=[];
  modalCreate:boolean = false;
  openModalDeleteBool:boolean = false;
  productoToDelete:any;
  ProductosFiltered : Producto[]= [];
  isSearching:boolean = false;
  URL:string = 'https://api-concretetools.herokuapp.com/api/productos/'; 

  constructor(private Rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos = () => {
    this.Rest.get(`https://api-concretetools.herokuapp.com/api/productos`).subscribe((respuesta:any) => {
      this.Productos = respuesta.Productos;
      this.ProductosFiltered = respuesta.Productos;
      console.log(`Productos =>>>`,respuesta);
    });
  }
  newProducto = ()=>{
    this.router.navigate(['create-producto']);

  }

  edit = (id:string) => {

    console.log(`Id a editar es: `,id);
    this.router.navigate(['edit-producto', id]);

  }

  delete = (id:string) => {
    this.productoToDelete = this.Productos.find(P=>P._id === id);
    console.log(`Id a eliminar es: `,this.productoToDelete);
    this.openModalDelete();
  }

  openModalDelete = () =>{
    this.openModalDeleteBool = !this.openModalDeleteBool;
  }
  search = (filter: string) => {

    if (filter.length > 0) {
      this.isSearching = true;
      filter = filter.toLocaleLowerCase();


      this.ProductosFiltered = this.Productos.filter( P => P.Nombre.toLocaleLowerCase().includes(filter) );

    }  else {

      this.isSearching = false;

    }
  }

}
