import {Case} from "./case";

export class ChessBoard {

  // Attributs communs à toutes les instances de notre classe
  // Vous n'avez pas besoin d'instancier votre classe pour y accéder
  // CF : l. 16
  static whiteClass: string = 'white';
  static blackClass: string = 'black';

  // private board: Array<Case> = new Array<Case>();
  private _board: Case[] = [];

  constructor() {
    const coordX: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const coordY: string[] = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let color: string = ChessBoard.whiteClass;

    for (const y of coordY) {
      for (const x of coordX) {
        // traitement pour créer la case et sa pièce potentielle...
        // traitement pour changer la valeur de color
      }
    }

  }

  get board(): Case[] {
    return this._board;
  }

}
