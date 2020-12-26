import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  ngOnInit(): void {
    this.showComponent = true;
  }

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  public showComponent: boolean = false;
  buscando = true;

  favoritoGenero: any[] = [];

  constructor(
    private dataService: DataLocalService,
    private moviesService: MoviesService
  ) {}
  
  public async ionViewWillEnter(){
    this.cargarFavoritos();
  }

  public async cargarFavoritos(){
    this.buscando = true;
    this.peliculas = await this.dataService.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();
    this.pelisPorGeneros( this.generos, this.peliculas );
    this.buscando = false;
  }

  pelisPorGeneros( generos: Genre[], peliculas: PeliculaDetalle[] ){
    this.favoritoGenero = [];

    generos.forEach( genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id )
        })
      })
    });
    console.log(this.favoritoGenero);
  }

}
