import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { Distribuidor } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-edit-distribuidor',
  templateUrl: './edit-distribuidor.component.html',
  styleUrls: ['./edit-distribuidor.component.css']
})
export class EditDistribuidorComponent implements OnInit {

  Distribuidor:any;
  DistribuidorObservable: Observable<any>= new Observable;
  showPhoto:boolean=true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private Rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const url:string = 'https://api-concretetools.herokuapp.com/api/distribuidor/'+params["id"];
      console.log(url);

      this.DistribuidorObservable = this.Rest.get(url);
      this.DistribuidorObservable.subscribe( element =>{
        console.log(element);

        this.Distribuidor=element.Distribuidor;
      });
    });
  }

  actualizarDistribuidor = () => {
    this.Rest.put('http://localhost:3768/api/distribuidor/'+this.Distribuidor._id, this.Distribuidor)

    .subscribe(res => {
      console.log(res);
      alert('Actualizado correctamente.');
      this.router.navigate(['admin-distribuidores-autorizados']);
  });
  }

  eliminarFoto = () => {
    this.showPhoto = !this.showPhoto;
  }

}
