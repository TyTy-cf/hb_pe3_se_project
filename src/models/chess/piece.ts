
export abstract class Piece {

  protected _color: string;
  protected _image: string = '';

  protected constructor(color: string) {
    this._color = color;
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
}
