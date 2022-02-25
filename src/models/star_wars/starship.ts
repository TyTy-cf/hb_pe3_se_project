import {Faction} from "./faction";

export class Starship {

  constructor(
    private _name: string,
    private _slug: string,
    private _faction: Faction,
    private readonly _image: string = ''
  ) {
    this._image = '../../assets/starship/' + this._slug + '.png';
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

  get faction(): Faction {
    return this._faction;
  }
}
