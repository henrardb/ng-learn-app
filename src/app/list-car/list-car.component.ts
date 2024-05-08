import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARS } from '../mock-cars-list';
import { Car } from '../car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
})
export class ListCarComponent {
  carList: Car[] = CARS;

  constructor(private router: Router) {}

  goToCar(car: Car) {
    this.router.navigate(['/car', car.id]);
  }
}
