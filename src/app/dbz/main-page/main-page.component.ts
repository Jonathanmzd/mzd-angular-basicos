import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  }

  constructor() {}
}

// Usando F5 podemos iniciar los run debug en visual code, ademas podemos realizar un point o marcado en la linea que deseamos realizar que sucede en esa line ade codigo que variables, ETC.
