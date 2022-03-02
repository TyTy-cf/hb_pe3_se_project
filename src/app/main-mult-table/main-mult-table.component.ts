import { Component } from '@angular/core';

@Component({
  selector: 'app-main-mult-table',
  templateUrl: './main-mult-table.component.html',
  styleUrls: ['./main-mult-table.component.scss']
})
export class MainMultTableComponent {

  arrayMultiplicationTable: Array<number> = [];

  constructor() {
    for (let i = 1; i <= 42; i++) {
      this.arrayMultiplicationTable.push(i);
    }
  }
}
