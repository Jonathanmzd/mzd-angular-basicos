import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}

// declarations
// Las declaraciones son para hacer que las directivas (incluidos los componentes y las tuberías) del módulo actual estén disponibles para otras directivas en el módulo actual. Los selectores de directivas, componentes o canalizaciones solo se comparan con el HTML si se declaran o importan.

// exports
// Una exportación lo que pones es la propiedad de exportaciones del decorador @NgModule. Permite que un módulo angular exponga algunos de sus componentes / directivas / tuberías a los otros módulos en las aplicaciones. Sin él, los componentes / directivas / conductos definidos en un módulo solo podrían usarse en ese módulo.

// imports
// Un Angular NgModule es una clase con el decorador @NgModule; los módulos JavaScript no tienen que tener el decorador @NgModule. NgModule de Angular tiene importaciones y exportaciones y tienen un propósito similar. Importa otros NgModules para poder usar sus clases exportadas en plantillas de componentes.

// providers
// Un proveedor es un objeto declarado en Angular para que pueda inyectarse en el constructor de sus componentes, directivas y otras clases instanciadas por Angular. ... Un servicio es un tipo particular de proveedor que se declara con su nombre de clase, como puede ver en el tutorial de Angular
