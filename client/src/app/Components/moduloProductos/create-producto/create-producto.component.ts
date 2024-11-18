import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Producto } from '../../interfaces/Prototipos';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  Producto:Producto={
    Orden: 0,
    Nombre: '',
    Clave: '',
    Precio: 0,
    Descripcion: '',
    Aplicaciones: '',
    Imagen:''
  };
  imageSrc: string='';

  myForm = new FormGroup({

    Orden: new FormControl('', [Validators.required]),
    Nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Clave: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Precio: new FormControl('', [Validators.required]),
    Descripcion: new FormControl('', [Validators.required]),
    Aplicaciones: new FormControl('', [Validators.required]),

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
    this.Rest.post('https://api-concretetools.herokuapp.com/api/producto', this.myForm.value)

      .subscribe(res => {

      console.log(res);

      alert('Uploaded Successfully.');

    });
  }

  guardar = (form : NgForm) => {
    console.log(`Producto a enviar: `, form);

    // validar campos

    // enviar peticion a API
    this.Rest.post('https://api-concretetools.herokuapp.com/api/producto', form.value)

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
