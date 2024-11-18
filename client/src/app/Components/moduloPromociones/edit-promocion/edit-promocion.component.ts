import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Promocion } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-edit-promocion',
  templateUrl: './edit-promocion.component.html',
  styleUrls: ['./edit-promocion.component.css']
})
export class EditPromocionComponent implements OnInit {

  Promocion:any;
  PromocionObservable: Observable<any>= new Observable;
  showPhoto:boolean=true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private Rest: RestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const url:string = 'https://api-concretetools.herokuapp.com/api/promocion/'+params["id"];
      console.log(url);

      this.PromocionObservable = this.Rest.get(url);
      this.PromocionObservable.subscribe( element =>{
        console.log(element.Promocion);

        this.Promocion=element.Promocion;
      });
    });
  }

  actualizarPromocion = () => {

    this.Rest.put('http://localhost:3768/api/promociones/'+this.Promocion._id, this.Promocion)

    .subscribe(res => {
      console.log(res);
      alert('Actualizado correctamente.');
    }

    )

  }

  eliminarFoto = () => {
    this.showPhoto = !this.showPhoto;
  }

}
