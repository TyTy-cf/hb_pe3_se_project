import {Case} from "./case";
import {Piece} from "./piece";
import {Rook} from "./rook";
import {Pawn} from "./pawn";
import {Knight} from "./knight";

export class ChessBoard {

  // Attributs communs à toutes les instances de notre classe
  // Vous n'avez pas besoin d'instancier votre classe pour y accéder
  // CF : l. 16
  static whiteClass: string = 'white';
  static blackClass: string = 'black';

  // private board: Array<Case> = new Array<Case>();
  private _board: Case[] = [];

  constructor() {
    const xValues: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yValues: string[] = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let caseColor: string = ChessBoard.whiteClass;

    for (const y of yValues) {
      for (const x of xValues) {
        let piece: Piece|undefined = undefined;
        if (y === '8') {
          if (x == 'a' || x == 'h') {
            piece = new Rook();
          } else if (x === 'b' || x === 'g') {
            piece = new Knight();
          }

          // que des pièces noires !
        } else if (y === '7') {
          piece = new Pawn();
        } else if (y === '2') {
          piece = new Pawn(ChessBoard.whiteClass);
        } if (y === '1') {
          // que des pièces blanches !!!!
        }

        // if pour dire que c'est un knight, un bishop, queen ou king...
        this._board.push(new Case(caseColor, x, y, piece));

        // traitement pour changer la valeur de color
        if (x !== 'h') {
          if (caseColor === ChessBoard.whiteClass) {
            caseColor = ChessBoard.blackClass;
          } else {
            caseColor = ChessBoard.whiteClass;
          }
        }
      }
    }

  }

  get board(): Case[] {
    return this._board;
  }

}
