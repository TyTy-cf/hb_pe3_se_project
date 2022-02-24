
export class Pokedex {

  private _arrayPokemonImage: Array<string> = new Array<string>();

  constructor(
    private _name: string,
    private _startingPokemonIndex: number,
    private _endingPokemonIndex: number,
    private _slug: string
  ) {
    for(let i = this._startingPokemonIndex; i <= this._endingPokemonIndex; i++) {
      this._arrayPokemonImage.push('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+i+'.png');
    }
  }

  get arrayPokemonImage(): Array<string> {
    return this._arrayPokemonImage;
  }

  get name(): string {
    return this._name;
  }

  get slug(): string {
    return this._slug;
  }
}
