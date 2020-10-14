import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './componets/agregar-editar-comentario/agregar-editar-comentario.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ListarComentarioComponent } from './componets/listar-comentario/listar-comentario.component';
import { VerComentarioComponent } from './componets/ver-comentario/ver-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentarioComponent,
    NavbarComponent,
    ListarComentarioComponent,
    VerComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
