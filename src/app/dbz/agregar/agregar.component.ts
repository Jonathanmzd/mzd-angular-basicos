import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}

// ¿Qué es @Input en angular?
// Los inputs nos permiten pasar valores desde el componente «padre» que utiliza dentro del el otro componente y así intercambiar datos entre estos dos componentes. ... Con esto ya sabemos usar los input en Angular 2 para interactuar y pasar datos entre componentes.

// ¿Qué es @Output en angular?
// Un patrón común en Angular es compartir datos entre un componente principal y uno o más componentes secundarios. ... @Input () permite que un componente principal actualice los datos del componente secundario. Por el contrario, @Output () permite que el hijo envíe datos a un componente principal