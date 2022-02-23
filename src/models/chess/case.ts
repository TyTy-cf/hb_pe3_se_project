import {Piece} from "./piece";

export class Case {

  // private _color: string;
  // private _x: string;
  // private _y: string;
  // private _piece: Piece|undefined;

  // ajouter un indice de visibilité en paramètre de constructeur, vous créez
  // directement l'attribut et l'initialise dans le constructeur
  constructor(
    private _color: string,
    private _x: string,
    private _y: string,
    private _piece: Piece | undefined
  ) {
    // this._color = color;
    // this._x = x;
    // this._y = y;
    // this._piece = piece;
  }

  get color(): string {
    return this._color;
  }

  get x(): string {
    return this._x;
  }

  get y(): string {
    return this._y;
  }

  // ensemble get + set => propriété d'un attribut
  get piece(): Piece | undefined {
    return this._piece;
  }

  set piece(value: Piece | undefined) {
    this._piece = value;
  }
}
