import {Language} from "./language";
import {Genre} from "./genre";

export class Game {

  private _id: number = 0;
  private _name: string = '';
  private _publishedAt: Date = new Date();
  private _price: number = 0;
  private _thumbnailCover: string = '';
  private _language: Language|undefined;
  private _genres: Genre[] = [];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get thumbnailCover(): string {
    return this._thumbnailCover;
  }

  set thumbnailCover(value: string) {
    this._thumbnailCover = value;
  }

  get language(): Language|undefined {
    return this._language;
  }

  set language(value: Language|undefined) {
    this._language = value;
  }

  get genres(): Genre[] {
    return this._genres;
  }

  set genres(value: Genre[]) {
    this._genres = value;
  }
}
