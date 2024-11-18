import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/shared/about/about.component';
import { HomeComponent } from './Components/shared/home/home.component';
import { MainComponent } from './Components/layouts/main/main.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { ProductosComponent } from './Components/moduloProductos/productos/productos.component';
import { PromocionesComponent } from './Components/moduloPromociones/promociones/promociones.component';
import { DistribuidoresComponent } from './Components/moduloDistribuidores/distribuidores/distribuidores.component';
import { ContactComponent } from './Components/shared/contact/contact.component';
import { CreateProductoComponent } from './Components/moduloProductos/create-producto/create-producto.component';
import { IndexProductosComponent } from './Components/moduloProductos/index-productos/index-productos.component';
import { ProductoComponent } from './Components/moduloProductos/producto/producto.component';
import { IndexPromocionesComponent } from './Components/moduloPromociones/index-promociones/index-promociones.component';
import { CreatePromocionComponent } from './Components/moduloPromociones/create-promocion/create-promocion.component';
import { CreateDistribuidorComponent } from './Components/moduloDistribuidores/create-distribuidor/create-distribuidor.component';
import { IndexDistribuidoresComponent } from './Components/moduloDistribuidores/index-distribuidores/index-distribuidores.component';
import { EditProductoComponent } from './Components/moduloProductos/edit-producto/edit-producto.component';
import { EditDistribuidorComponent } from './Components/moduloDistribuidores/edit-distribuidor/edit-distribuidor.component';
import { EditPromocionComponent } from './Components/moduloPromociones/edit-promocion/edit-promocion.component';
import { ModalDeleteComponent } from './Components/layouts/modal-delete/modal-delete.component';
import { LoginComponent } from './Components/login/login.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    ProductoComponent,
    ProductosComponent,
    PromocionesComponent,
    DistribuidoresComponent,
    ContactComponent,
    IndexProductosComponent,
    IndexPromocionesComponent,
    IndexDistribuidoresComponent,
    CreateProductoComponent,
    CreatePromocionComponent,
    CreateDistribuidorComponent,
    EditProductoComponent,
    EditDistribuidorComponent,
    EditPromocionComponent,
    ModalDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
