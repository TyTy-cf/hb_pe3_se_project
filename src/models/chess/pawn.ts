import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string = 'black') {
    // super : rappelle la même méthode de la classe mère
    // dans le cadre d'un constructeur c'est obligatoire !
    // et il doit être appelé en premier, TOUJOURS
    super(color, 'pawn');
  }

  // Redéfinition de méthodes
  move(): void {
    console.log('move du pion');
  }

}
