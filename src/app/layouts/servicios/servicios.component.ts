import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { IServicio, servicios } from './servicios';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <h1>NUESTROS SERVICIOS</h1>
      <main>
        <section class="servicio-principal">
            <div class="servicio">
              <img [src]="servicios[0].img" [alt]="servicios[0].title">
              <h2>{{servicios[0].title}}</h2>
              <p>{{servicios[0].description}}</p>
              <a href="">Saber más</a>
            </div></section>
            <swiper-container init=false class="swiper-servicios">
              @for (servicio of servicios; track $index) {
                <swiper-slide>
                <div class="servicio">
                <img [src]="servicio.img" [alt]="servicio.title">
                <div class="contenido">
                <h2>{{servicio.title}}</h2>
                <p>{{servicio.description}}</p>
                <a href="">Saber más</a></div>
                </div>
                </swiper-slide>
              }
            </swiper-container>
      </main>
      
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent implements OnInit {

  servicios:IServicio[] = servicios;
  swiperElements = signal<SwiperContainer | null>(null);

  constructor(@Inject(DOCUMENT) private dom: Document, @Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if(this.platformId === 'browser'){
      console.log('Estoy en el navegador');
      register();
      const swiperElemConstructor = document.querySelector('.swiper-servicios');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
      speed: 10000,
      loop: true,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        640: {
          slidesPerView:1,
        },
        1024: {
          slidesPerView:2,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();

    }else{
      

    }

    console.log('Estoy en el servidor');
      }

}
