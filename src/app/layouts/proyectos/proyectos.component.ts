import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { IProyecto, proyectos } from './proyectos';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <h1>NUESTROS PRINCIPALES PROYECTOS</h1>
      <main>
        <swiper-container init=false class="swiper-proyectos">
          @for (proyecto of proyectos; track $index) {
          <swiper-slide>
            <img [src]="proyecto.img" [alt]="proyecto.title">
            <h2>{{proyecto.title}}</h2>
            <p>{{proyecto.description}}</p>
          </swiper-slide>}
        </swiper-container>
      </main>
    </header>
  `,
  styleUrl: './proyectos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosComponent implements OnInit {

  proyectos:IProyecto[] = proyectos;
  swiperElements = signal<SwiperContainer | null>(null);

  constructor(@Inject(DOCUMENT) private dom: Document, @Inject(PLATFORM_ID) private platformId: Object){

  }

  ngOnInit(): void {
      if(this.platformId === 'browser'){
        console.log('Estoy en el navegador');
        register();
        const swiperElemConstructor = document.querySelector('.swiper-proyectos');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        slidesPerView: 'auto',
        autoplay: true,
        speed: 1000,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          0:{
            slidesPerView:1,
          },
          900: {
            slidesPerView:2,
          },
          1024: {
            slidesPerView:3,
          },
        },
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();
      }else{}
      console.log('Estoy en el servidor');
      }
  }
