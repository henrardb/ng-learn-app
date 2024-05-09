import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { BorderCardDirective } from './border-card.directive';
import { CarTypeColorPipe } from './car-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { CarService } from './car.service';

const carRoutes: Routes = [
  { path: 'cars', component: ListCarComponent },
  { path: 'car/:id', component: DetailCarComponent },
];

@NgModule({
  declarations: [
    ListCarComponent,
    DetailCarComponent,
    BorderCardDirective,
    CarTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(carRoutes)],
  providers: [CarService],
})
export class CarModule {}
