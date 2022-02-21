import { Component } from '@angular/core';
import {ChessBoard} from "../../models/chess/chess-board";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {

  chessBoard: ChessBoard = new ChessBoard();

  constructor() {
    console.log(this.chessBoard.board);
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
