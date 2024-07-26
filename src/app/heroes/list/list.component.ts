import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Hulk','Ironman', 'Thor','She Hulk']
  public deletedHeroe?: string;

  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();

  }
}
