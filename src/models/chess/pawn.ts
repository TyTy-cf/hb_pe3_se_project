import {Piece} from "./piece";
import {Case} from "./case";

export class Pawn extends Piece {

  constructor(color: string = 'black') {
    // super : rappelle la même méthode de la classe mère
    // dans le cadre d'un constructeur c'est obligatoire !
    // et il doit être appelé en premier, TOUJOURS
    super(color, 'pawn');
  }

  // Redéfinition de méthodes
  move(selectedCase: Case): void {
    super.move(selectedCase);
    console.log('move du pion');
  }

}
