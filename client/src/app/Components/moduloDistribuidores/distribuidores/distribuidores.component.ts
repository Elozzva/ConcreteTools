import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.css']
})
export class DistribuidoresComponent implements OnInit {
  Distribuidores: any;
  DistribuidoresFiltered: any;

  region:string = "";
  regiones:string[]= ["CENTRO", "SUR", "NORTE"];
  constructor(private Rest: RestService) { }

  async ngOnInit(): Promise<void> {
    await this.getDistribuidores();
    setTimeout(() => {
      this.region = "CENTRO";
      this.filterByRegion();
    }, 1000);
  }

  getDistribuidores = async() => {
    await this.Rest.get(`https://api-concretetools.herokuapp.com/api/distribuidores`).subscribe((respuesta:any) => {
      this.Distribuidores = respuesta.Distribuidores;
      //console.log(`Distribuidores =>>>`,respuesta);
    });
  }

  filterByRegion = () => {
    this.DistribuidoresFiltered = this.Distribuidores.filter((D:any)=>D.Region === this.region);
    //console.log(this.DistribuidoresFiltered);    
  }
}
