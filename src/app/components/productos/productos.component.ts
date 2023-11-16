import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Formulario} from 'src/app/data/interface/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  @Output() formularioEnviado: EventEmitter<Formulario> = new EventEmitter<Formulario>();

  tarea: string = '';
  categoria: string= '';
  enviar: boolean = false;
  check: boolean = false;

  listaFormulario: Formulario[] = [];

  enviarFormulario(){

    let formulario: Formulario = {

      tarea: this.tarea,
      categoria: this.categoria,
      checkEstado:true
    };

    this.listaFormulario.push(formulario);
    this.enviar = true;

    this.formularioEnviado.emit(formulario);

  
  }

  elCheck(persona: Formulario){


    persona.check= true;
    persona.checkEstado = false;


  }


}

  

