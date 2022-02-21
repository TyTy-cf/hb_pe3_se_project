import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string = 'black') {
    super(color);
    this.image = 'assets/chess/pawn-' + this.color + '.png';
  }

}
