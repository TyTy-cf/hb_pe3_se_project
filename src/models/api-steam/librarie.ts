import {Game} from "./game";

export class Librarie {

  private _id: number = 0;
  private _installed: boolean = false;
  private _gameTime: number = 0;
  private _lastUsed: Date = new Date();
  private _game: string = '';

  private _objectGame: Game|undefined;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get installed(): boolean {
    return this._installed;
  }

  set installed(value: boolean) {
    this._installed = value;
  }

  get gameTime(): number {
    return this._gameTime;
  }

  set gameTime(value: number) {
    this._gameTime = value;
  }

  get lastUsed(): Date {
    return this._lastUsed;
  }

  set lastUsed(value: Date) {
    this._lastUsed = value;
  }

  get game(): string {
    return this._game;
  }

  set game(value: string) {
    this._game = value;
  }

  get objectGame(): Game | undefined {
    return this._objectGame;
  }

  set objectGame(value: Game | undefined) {
    this._objectGame = value;
  }
}
