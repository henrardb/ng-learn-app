import { Component, OnInit } from '@angular/core';
import { CARS } from './mock-cars-list';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  carList: Car[] = CARS;

  ngOnInit(): void {
    console.table(this.carList);
    this.selectCar(this.carList[0]);
  }

  selectCar(car: Car) {
    console.log(`Vous avez cliqué sur la voiture ${car.name}`);
  }
}
