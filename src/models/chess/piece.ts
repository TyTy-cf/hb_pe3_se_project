
export abstract class Piece {

  protected _color: string;
  protected _image: string = '';
  protected _name: string = '';

  protected constructor(color: string, name: string) {
    this._color = color;
    this._name = name;
    this.image = 'assets/chess/' + this.name + '-' + this.color + '.png';
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
