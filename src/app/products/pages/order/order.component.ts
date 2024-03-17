import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public sortByType: keyof Hero | '' = "";

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero): void {
    this.sortByType = value;
  }

}
