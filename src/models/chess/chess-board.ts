import {Case} from "./case";
import {Piece} from "./piece";
import {Rook} from "./rook";
import {Pawn} from "./pawn";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Queen} from "./queen";
import {King} from "./king";

// export : permet de réutiliser la classe en dehors de ce fichier
export class ChessBoard {

  // Attributs communs à toutes les instances de notre classe
  // Vous n'avez pas besoin d'instancier votre classe pour y accéder
  // CF : l. 16
  static whiteClass: string = 'white';
  static blackClass: string = 'black';

  // private board: Array<Case> = new Array<Case>();
  private _board: Case[] = [];
  private _currentSelectedCase: Case|undefined;

  constructor() {
    const xValues: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yValues: string[] = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let caseColor: string = ChessBoard.whiteClass;

    for (const y of yValues) {
      for (const x of xValues) {
        let piece: Piece|undefined = undefined;
        // caseColor = white
        // y = 8
        // x = a
        // piece = undefined
        if (y === '8') {
          if (x == 'a' || x == 'h') {
            piece = new Rook();
          } else if (x === 'b' || x === 'g') {
            piece = new Knight();
          } else if (x === 'c' || x === 'f') {
            piece = new Bishop();
          } else if (x == 'd') {
            piece = new Queen();
          } else if (x == 'e') {
            piece = new King();
          }
        } else if (y === '7') {
          piece = new Pawn();
        } else if (y === '2') {
          piece = new Pawn(ChessBoard.whiteClass);
        } if (y === '1') {
          if (x == 'a' || x == 'h') {
            piece = new Rook(ChessBoard.whiteClass);
          } else if (x === 'b' || x === 'g') {
            piece = new Knight(ChessBoard.whiteClass);
          } else if (x === 'c' || x === 'f') {
            piece = new Bishop(ChessBoard.whiteClass);
          } else if (x == 'd') {
            piece = new Queen(ChessBoard.whiteClass);
          } else if (x == 'e') {
            piece = new King(ChessBoard.whiteClass);
          }
        }

        // caseColor = white
        // y = 8
        // x = a
        // piece = Rook
        this._board.push(new Case(caseColor, x, y, piece));

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

  move(selectedCase: Case): void {
    if (this._currentSelectedCase === undefined
      && selectedCase.piece
      && !selectedCase.isSelected
    ) {
      this._currentSelectedCase = selectedCase;
      // à gauche du égal : set appelé implicitement
      // à droite du égal : get appelé implicitement
      selectedCase.isSelected = !selectedCase.isSelected;
    } else {
      if (this._currentSelectedCase === selectedCase) {
        this._currentSelectedCase = undefined;
        selectedCase.isSelected = !selectedCase.isSelected;
      }
    }

    // si, ma case en cours de sélection existe
    // et selectedCase n'a pas de piece
    // ou que la couleur de la pièce de selectedCase est différente de la pièce de currentSelectedCase
    if (this._currentSelectedCase
      && (!selectedCase.piece
      ||
        selectedCase.piece?.color !== this._currentSelectedCase.piece?.color
      )
    ) {
      // Je dis que la pièce de ma case d'arrivée devient la pièce de ma case en cours de sélection
      selectedCase.piece = this._currentSelectedCase.piece;
      // je dis que ma case en cours de sélection n'a plus de pièce
      this._currentSelectedCase.piece = undefined;
      // qu'elle n'est plus sélectionnée
      this._currentSelectedCase.isSelected = false;
      // et qu'il n'y a plus de case en cours de sélection
      this._currentSelectedCase = undefined;
    }

  }

  get board(): Case[] {
    return this._board;
  }



}
