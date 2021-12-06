import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TipoClienteListaComponent } from './tipo-cliente-lista/tipo-cliente-lista.component';
import { TipoClienteFormComponent } from './tipo-cliente-form/tipo-cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    TipoClienteListaComponent,
    TipoClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
