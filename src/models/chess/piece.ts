
// Une classe abstraite est une classe qui ne s'instancie pas
// Elle doit donc impérativement être étendue afin de "s'instancier"
import {Case} from "./case";

export abstract class Piece {

  // indice de visibilité
  // protected : seulement dans la classe mère et ses filles
  // private : seulement dans la classe courante*
  // public : partout
  protected _image: string = '';

  // Equivalent du constructeur en-dessous

  // protected _color: string = '';
  //
  // protected constructor(color: string) {
  //   this._color = color;
  // }

  protected constructor(
    protected _color: string,
    protected _name: string
  ) {
    this._image = 'assets/chess/' + this._name + '-' + this._color + '.png';
  }

  get color(): string {
    return this._color;
  }

  get image(): string {
    return this._image;
  }

  get name(): string {
    return this._name;
  }

  public move(selectedCase: Case): void {
    console.log('move de la mère');
  }
}
