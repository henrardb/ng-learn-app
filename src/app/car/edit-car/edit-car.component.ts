import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
})
export class EditCarComponent implements OnInit {
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    const carId: string | null = this.route.snapshot.paramMap.get('id');

    if (carId) {
      this.car = this.carService.getCarById(+carId);
    } else {
      this.car = undefined;
    }
  }
}
