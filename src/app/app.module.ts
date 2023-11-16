import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ProductosComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
