import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
  buscando = true;

  constructor( private moviesService: MoviesService ) {}

  async ngOnInit(){
    await this.getData();
  }

  async getData(){
    this.buscando = true;
    this.moviesService.getFeature()
    .subscribe( resp => {
      this.peliculasRecientes = resp.results;
    });

    await this.getPopulares();
    this.buscando = false;
  }

  async cargarMas(){
    await this.getPopulares()
  }

  async getPopulares(){
    this.moviesService.getPopulares()
    .subscribe( resp => {

      const arrTemp = [...this.populares, ...resp.results];
      this.populares = arrTemp;
    });
  }
}
