import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
})
export class ListCarComponent implements OnInit {
  carList: Car[];

  constructor(private router: Router, private carservice: CarService) {}

  ngOnInit() {
    this.carservice
      .getCarList()
      .subscribe((carList) => (this.carList = carList));
  }

  goToCar(car: Car) {
    this.router.navigate(['/car', car.id]);
  }
}
