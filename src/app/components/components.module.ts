import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesShowPosterComponent } from './slides-show-poster/slides-show-poster.component';
import { SlidesShowParesComponent } from './slides-show-pares/slides-show-pares.component';

@NgModule({
  declarations: [
    SlidesShowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesShowParesComponent
  ],
  exports: [
    SlidesShowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesShowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
