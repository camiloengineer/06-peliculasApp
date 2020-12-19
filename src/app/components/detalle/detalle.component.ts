import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Tab3Page } from '../../tab3/tab3.page';

@Component({
  providers:[Tab3Page ],
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  oculto = 150;
  estrella = 'star-outline';

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService,
    private comp: Tab3Page
  ) { }

  ngOnInit() {

    this.dataLocal.existePelicula( this.id )
    .then( existe => this.estrella = existe ? 'star' : 'star-outline' );

    this.movieService.getPeliculaDetalle( this.id )
    .subscribe(resp => {
      this.pelicula = resp;
    })

    this.movieService.getActoresPelicula( this.id )
    .subscribe(resp => {
      this.actores = resp.cast;
    })
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){
    const existe = this.dataLocal.guardarPelicula(this.pelicula)
    this.estrella = existe ? 'star' : 'star-outline';
  }

}
