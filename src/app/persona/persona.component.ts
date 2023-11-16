import { Component, Input } from '@angular/core';
import { Formulario } from '../data/interface/producto.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona : Formulario = {};
}
