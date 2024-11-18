import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  loginModalBool:boolean=false;
  anio:number =0;
  antiguedad:number =0;

  constructor() { }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();
    this.antiguedad = new Date().getFullYear() - 2012;
  }
  closeLogin =() => {
    console.log(`abrir o cerrar modal`);
    this.loginModalBool = !this.loginModalBool;
  }
}
