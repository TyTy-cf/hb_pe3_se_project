import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'hb pe3 se project';
  increment: number = 0;
  students: string[] = [
    'Yann', 'Mathieu', 'Matthieu'
  ];

  addIncrement(value: number): void {
    this.increment += value;
  }
}
