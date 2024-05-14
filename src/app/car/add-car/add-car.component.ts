import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent implements OnInit {
  car: Car;

  ngOnInit() {
    this.car = new Car();
  }
}
