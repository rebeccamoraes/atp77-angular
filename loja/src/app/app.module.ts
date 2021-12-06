import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TipoClienteListaComponent } from './tipo-cliente-lista/tipo-cliente-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    TipoClienteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
