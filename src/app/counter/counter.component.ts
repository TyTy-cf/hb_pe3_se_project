import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  increment: number = 0;

  addIncrement(value: number): void {
    this.increment += value;
  }
}
