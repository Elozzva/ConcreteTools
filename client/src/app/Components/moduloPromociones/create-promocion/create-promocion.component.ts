import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Promocion } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-create-promocion',
  templateUrl: './create-promocion.component.html',
  styleUrls: ['./create-promocion.component.css']
})
export class CreatePromocionComponent implements OnInit {

  Promocion:Promocion={
    Tipo: '',
    Producto: '',
    Inicio: new Date(),
    Fin: new Date(),
    Precio: 0,
    Imagen:''
  };
  imageSrc: string='';

  myForm = new FormGroup({

    Tipo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Producto: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Inicio: new FormControl('', [Validators.required]),
    Fin: new FormControl('', [Validators.required]),
    Precio: new FormControl('', [Validators.required]),

    file: new FormControl('', [Validators.required]),

    fileSource: new FormControl('', [Validators.required])

  });


  constructor(private Rest: RestService) { }

  get f(){

    return this.myForm.controls;

  }

  ngOnInit(): void {}

  submit(){
    console.log(this.myForm.value);
    this.Rest.post('https://api-concretetools.herokuapp.com/api/promocion', this.myForm.value)

      .subscribe(res => {

        console.log(res);

        alert('Uploaded Successfully.');

      })
  }

  guardar = (form : NgForm) => {
    console.log(`Promocion a enviar: `, form);

    // validar campos

    // enviar peticion a API
    this.Rest.post('https://api-concretetools.herokuapp.com/api/promocion', form.value)

      .subscribe(res => {

      console.log(res);

      alert('Uploaded Successfully.');

    });
    // validar respuesta (Redireccionas o marcas error en form)
  }

  onFileChange(event:any) {

    const reader = new FileReader();


    if(event.target.files && event.target.files.length) {

      const [file] = event.target.files;

      reader.readAsDataURL(file);



      reader.onload = () => {

        this.imageSrc = reader.result as string;


        this.myForm.patchValue({

          fileSource: reader.result

        });

      };



    }

  }



}


