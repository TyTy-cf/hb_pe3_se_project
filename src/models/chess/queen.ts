import {Piece} from "./piece";

export class Queen extends Piece {

  constructor(color: string = 'black') {
    super(color, 'queen');
  }

}
