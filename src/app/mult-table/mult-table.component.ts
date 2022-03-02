import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mult-table',
  templateUrl: './mult-table.component.html',
  styleUrls: ['./mult-table.component.scss']
})
export class MultTableComponent {

  @Input()
  numberTable: number = 0;

  multiTable(): Array<string> {
    let tabMult: Array<string> = [];
    for(let i = 1; i <= 12; i++) {
      tabMult.push(this.numberTable + ' x ' + i + ' = ' + (i * this.numberTable));
    }
    return tabMult;
  }

}
