import {Piece} from "./piece";

export class Case {

  private _color: string;
  private _x: string;
  private _y: string;
  private _piece: Piece|undefined;

  constructor(
    color: string,
    x: string,
    y: string,
    piece: Piece | undefined
  ) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._piece = piece;
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
