import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import {Promocion, Producto} from '../../interfaces/Prototipos';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  Promociones: Promocion[]=[];
  Productos: Producto[]=[];

  constructor(private Rest: RestService) { }

  ngOnInit(): void {
    this.getPromociones();
  }

  getPromociones = () => {
    this.Rest.get(`http://localhost:3768/api/promociones`).subscribe((respuesta:any) => {
      this.Promociones = respuesta.Promociones;
      
    });
    
    this.Rest.get(`http://localhost:3768/api/productos`).subscribe((respuesta:any) => {
      this.Productos = respuesta.Productos;
    });
    
    setTimeout(() => {
      this.Promociones.forEach(pro => {
        pro.Item = this.Productos.find(P=>P.Clave===pro.Producto);
      });
      
      /* const promocionesPorcentaje = this.Promociones.filter(pro => {
        pro.Tipo==='Porcentaje'
      }); */
      console.log(`Productos =>>>`, this.Promociones);
    }, 500);
  }

}

