import {Component, Input} from '@angular/core';
import {Game} from "../../models/api-steam/game";

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {

  @Input()
  game: Game|undefined;

  @Input()
  displayPrice: boolean = true;

  @Input()
  hasInstalled: boolean = false;

}
