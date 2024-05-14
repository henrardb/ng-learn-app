export class Car {
  id: number;
  name: string;
  issuance: number;
  picture: string;
  category: string[];
  created: Date;

  constructor(
    name: string = 'Entrer un nom',
    issuance: number = 1900,
    picture: string = '../assets/Logos/xxx.jpg',
    category: string[] = ['Sedan'],
    created: Date = new Date()
  ) {
    this.name = name;
    this.issuance = issuance;
    this.picture = picture;
    this.category = category;
    this.created = created;
  }
}
