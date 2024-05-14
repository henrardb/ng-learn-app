import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { BorderCardDirective } from './border-card.directive';
import { CarTypeColorPipe } from './car-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { CarService } from './car.service';
import { CarFormComponent } from './car-form/car-form.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { AddCarComponent } from './add-car/add-car.component';

const carRoutes: Routes = [
  { path: 'edit/car/:id', component: EditCarComponent },
  { path: 'car/add', component: AddCarComponent },
  { path: 'cars', component: ListCarComponent },
  { path: 'car/:id', component: DetailCarComponent },
];

@NgModule({
  declarations: [
    ListCarComponent,
    DetailCarComponent,
    BorderCardDirective,
    CarTypeColorPipe,
    CarFormComponent,
    EditCarComponent,
    AddCarComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(carRoutes)],
  providers: [CarService],
})
export class CarModule {}
