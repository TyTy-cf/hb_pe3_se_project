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

}
