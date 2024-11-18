import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() closeModal:any;
  toast:boolean = false;
  error:boolean = false;
  response:     any;
  mensajes:     string[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  closeAdvice = ( ) => {
    
    this.closeModal();
  }

}
