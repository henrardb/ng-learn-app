import { Component, OnInit } from '@angular/core';
import { CARS } from './mock-cars-list';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  carList: Car[] = CARS;
  carSelected: Car | undefined;

  ngOnInit(): void {
    console.table(this.carList);
  }

  selectCar(carId: string) {
    const car: Car | undefined = this.carList.find((car) => car.id == +carId);
    if (car) {
      console.log(`Vous avez demandé la voiture ${car.name}`);
      this.carSelected = car;
    } else {
      console.log(`Vous avez demandé une voiture qui n'existe pas`);
      this.carSelected = car;
    }
  }
}
