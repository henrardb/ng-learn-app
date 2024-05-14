import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  @Input() car: Car;
  categories: string[];
  isAddForm: boolean;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.categories = this.carService.getCarCategoryList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasCategory(category: string): boolean {
    return this.car.category.includes(category);
  }

  selectCategory($event: Event, category: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.car.category.push(category);
    } else {
      const index = this.car.category.indexOf(category);
      this.car.category.splice(index, 1);
    }
  }

  isCategoryValid(category: string): boolean {
    if (this.car.category.length == 1 && this.hasCategory(category)) {
      return false;
    }

    if (this.car.category.length > 1 && !this.hasCategory(category)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.carService
        .addCar(this.car)
        .subscribe((car: Car) => this.router.navigate(['/car', car.id]));
    } else {
      this.carService.updateCar(this.car).subscribe(() => {
        this.router.navigate(['/car', this.car.id]);
      });
    }
  }
}
