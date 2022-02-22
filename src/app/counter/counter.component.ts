import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  // Pensez bien à ce que vos attributs/méthodes soient PUBLIQUE
  // afin de les afficher dans le .html
  increment: number = 0;

  addIncrement(value: number): void {
    this.increment += value;
  }
}
