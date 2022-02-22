import { Component } from '@angular/core';
import {ChessBoard} from "../../models/chess/chess-board";
import {Pawn} from "../../models/chess/pawn";
import {King} from "../../models/chess/king";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {

  // Je déclare une variable de nom chessBoard
  // de type ChessBoard, que j'instancie
  chessBoard: ChessBoard = new ChessBoard();

  constructor() {
    console.log(this.chessBoard.board);
    // code permettant de vérifier quelle fonction move est appelée
    for (const aCase of this.chessBoard.board) {
      if (aCase.piece) {
        const piece = aCase.piece;
        if (piece instanceof Pawn) {
          piece.move();
        } else if (piece instanceof King) {
          piece.move();
        }
      }
    }

    // // for..of : renvoie la valeur de l'itération
    // for (const argument of this.chessBoard.board) {
    //   console.log(this.chessBoard.board);
    // }
    // // for..in : renvoie l'index de l'itération
    // for (const argument in this.chessBoard.board) {
    //   console.log(argument);
    // }
  }

}
