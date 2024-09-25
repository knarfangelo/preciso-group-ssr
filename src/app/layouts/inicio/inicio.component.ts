import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../components/navegacion/navegacion.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { ProyectosComponent } from "../proyectos/proyectos.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    ServiciosComponent,
    ProyectosComponent
],
  template: `
  <header>
    <app-navegacion></app-navegacion>
    <main>
      <div class="filtro"></div>
      <img class="fondo-principal" src="inicio/fondoprincipal.jpg" alt="fondo principal de preciso electric">
      <img class="logo" src="inicio/precisoelectric.svg" alt="logro de preciso electric">
    </main>
    <app-servicios></app-servicios>
    <app-proyectos></app-proyectos>
  </header>
  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
