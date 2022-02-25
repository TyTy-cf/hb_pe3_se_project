
export class Faction {

  constructor(
    private _name: string,
    private _slug: string,
    private _color: string,
    private readonly _image: string = ''
  ) {
    this._image = '../../assets/faction/' + this._slug + '.png';
  }

  get name(): string {
    return this._name;
  }

  get slug(): string {
    return this._slug;
  }

  get image(): string {
    return this._image;
  }

  get color(): string {
    return this._color;
  }
}
