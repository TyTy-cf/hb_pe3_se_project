import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pawn} from "../../models/chess/pawn";
import {King} from "../../models/chess/king";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // Pensez bien à ce que vos attributs/méthodes soient PUBLIQUE
  // afin de les afficher dans le .html
  increment: number = 0;

  // Via Injection de dépendance on récupère un objet de type ActivatedRoute
  // (Injection de dépendance : création de l'objet géré par Angular
  constructor(private attributeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // fonction fléchée ou fonction anonyme
    this.attributeRoute.params.subscribe(paramRoute => {
      // Via le paramRoute, on souhaite récupérer le nom du paramètre que l'on a définit
      // dans le app.routing-module.ts
      this.increment = parseInt(paramRoute.initialValue);
    });

    // console.log(this.chessBoard.board);
    // // code permettant de vérifier quelle fonction move est appelée
    // for (const aCase of this.chessBoard.board) {
    //   if (aCase.piece) {
    //     const piece = aCase.piece;
    //     if (piece instanceof Pawn) {
    //       piece.move();
    //     } else if (piece instanceof King) {
    //       piece.move();
    //     }
    //   }
    // }

    // // for..of : renvoie la valeur de l'itération
    // for (const argument of this.chessBoard.board) {
    //   console.log(this.chessBoard.board);
    // }
    // // for..in : renvoie l'index de l'itération
    // for (const argument in this.chessBoard.board) {
    //   console.log(argument);
    // }


  }

  addIncrement(value: number): void {
    this.increment += value;
  }
}
