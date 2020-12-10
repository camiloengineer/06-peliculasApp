import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slides-show-poster',
  templateUrl: './slides-show-poster.component.html',
  styleUrls: ['./slides-show-poster.component.scss'],
})
export class SlidesShowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slidesOpts = {
    slidesPerView : 3.3,
    freeMode : true
  };

  constructor() { }

  ngOnInit() {}

}
