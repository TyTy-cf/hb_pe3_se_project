import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../models/api-steam/game";

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.scss']
})
export class FormGameComponent implements OnInit {

  formGame: FormGroup;
  game: Game = new Game();

  constructor() {
    // FormControl : ça représente un input de l'html, mais en code
    // on indique son état initial et surtout à partir de quelle donnée
    // Et ses éventuelles validations
    this.formGame = new FormGroup(
      {
        _name: new FormControl(
          this.game.name, [
            Validators.required
          ]
        )
      }
    );
  }

  ngOnInit(): void {
  }

  get name(): AbstractControl {
    return <AbstractControl>this.formGame.get('_name');
  }


}
