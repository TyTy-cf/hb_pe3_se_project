import { Component } from '@angular/core';
import {Piece} from "../../models/chess/piece";
import {Pawn} from "../../models/chess/pawn";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {

  pieces: Piece[] = [
    new Pawn('black'),
    new Pawn('white')
  ];

  constructor() {
    // for..of : renvoie la valeur de l'itération
    for (const argument of this.pieces) {
      console.log(argument);
    }
    // for..in : renvoie l'index de l'itération
    for (const argument in this.pieces) {
      console.log(argument);
    }
  }

}
