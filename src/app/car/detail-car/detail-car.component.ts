import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
})
export class DetailCarComponent implements OnInit {
  carList: Car[];
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carservice: CarService
  ) {}

  ngOnInit() {
    const carId: string | null = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.car = this.carservice.getCarById(+carId);
    }
  }

  goToCarList() {
    this.router.navigate(['/cars']);
  }
}
