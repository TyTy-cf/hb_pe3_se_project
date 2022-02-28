
export class Game {

  private _id: number = 0;
  private _name: string = '';
  private _publishedAt: Date = new Date();
  private _price: number = 0;
  private _thumbnailCover: string = '';

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
}
