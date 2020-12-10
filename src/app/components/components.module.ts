import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesShowPosterComponent } from './slides-show-poster/slides-show-poster.component';
import { SlidesShowParesComponent } from './slides-show-pares/slides-show-pares.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    SlidesShowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesShowParesComponent,
    DetalleComponent
  ],
  exports: [
    SlidesShowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesShowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
