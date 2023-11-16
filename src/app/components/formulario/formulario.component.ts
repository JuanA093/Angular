import { Component, Input } from '@angular/core';
import { Formulario } from 'src/app/data/interface/producto.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  listaFormularios: Formulario[] = [];

  guardar(formulario: Formulario){
    this.listaFormularios.push(formulario);
    

  }



}
