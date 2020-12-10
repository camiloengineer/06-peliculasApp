import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slides-show-pares',
  templateUrl: './slides-show-pares.component.html',
  styleUrls: ['./slides-show-pares.component.scss'],
})
export class SlidesShowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slidesOpts = {
    slidesPerView : 3.3,
    freeMode : true,
    spaceBetween: -10
  };

  constructor() { }

  ngOnInit() {}

}
