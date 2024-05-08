import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carTypeColor',
})
export class CarTypeColorPipe implements PipeTransform {
  transform(category: string): string {
    let color: string = '';

    switch (category) {
      case 'Coupe':
        color = 'red lighten-1';
        break;
      case 'Convertible':
        color = 'blue lighten-1';
        break;
      case 'Wagon':
        color = 'green lighten-1';
        break;
      case 'Sedan':
        color = 'brown lighten-1';
        break;
      case 'Pickup':
        color = 'grey lighten-3';
        break;
      case 'Hatchback':
        color = 'blue lighten-3';
        break;
      case 'SUV':
        color = 'deep-purple accent-1';
        break;
    }

    return 'chip ' + color;
  }
}
