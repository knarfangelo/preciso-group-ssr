import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <ul class="navegacion">
        <li class="logo"><a href=""><img src="inicio/titulo.svg" alt="logo de grupo preciso"></a></li>
        <li class="nav"><a href="">Nosotros</a></li>
        <li class="nav"><a href="">Servicios</a></li>
        <li class="buscador"><input type="text" placeholder="Buscar servicios"></li>
        <li class="nav"><a href="">Contacto</a></li>
        <li class="bandera"><a href=""><img src="inicio/perubandera.png" alt="traductor al español"></a></li>
        <li class="bandera"><a href=""><img src="inicio/eeuubandera.png" alt="traductor al ingles"></a></li>
        <li class="whatsapp bandera"><a href=""><img src="inicio/whatsapp.svg" alt="whatsapp de preciso"></a></li>
      </ul>
    </nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
