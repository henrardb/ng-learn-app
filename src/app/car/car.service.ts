import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars-list';

@Injectable()
export class CarService {
  getCarList(): Car[] {
    return CARS;
  }

  getCarById(carId: number): Car | undefined {
    return CARS.find((car) => car.id == carId);
  }

  getCarCategoryList(): string[] {
    return [
      'Coupe',
      'Convertible',
      'Wagon',
      'Sedan',
      'Pickup',
      'Hatchback',
      'SUV',
    ];
  }
}
