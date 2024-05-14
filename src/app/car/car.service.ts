import { Injectable } from '@angular/core';
import { Car } from './car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>('api/cars').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getCarById(carId: number): Observable<Car | undefined> {
    return this.http.get<Car>(`api/cars/${carId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateCar(car: Car): Observable<Car | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applications/json' }),
    };

    return this.http.put('api/cars', car, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addCar(car: Car): Observable<Car> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applications/json' }),
    };

    return this.http.post<Car>('api/cars', car, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteCarById(carId: Number): Observable<null> {
    return this.http.delete(`api/cars/${carId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
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
