import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CARS } from '../mock-cars-list';
import { Car } from '../car';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
})
export class DetailCarComponent implements OnInit {
  carList: Car[];
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.carList = CARS;
    const carId: string | null = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.car = this.carList.find((car) => car.id == +carId);
    }
  }

  goToCarList() {
    this.router.navigate(['/cars']);
  }
}
