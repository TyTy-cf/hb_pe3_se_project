
// id | name    | category_parent_id
// 1  | dog     | null
// 2  | paniere | 1
// 3  | cat     | null
// 4  | jouet   | 1

// SELECT * FROM category WHERE category_parent_id IS NULL
// SELECT * FROM category WHERE category_parent_id = 1 // id du chien

export class Category {

  private _id: string = '';
  private _name: string = '';
  private _categoryParent: Category|undefined;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get categoryParent(): Category | undefined {
    return this._categoryParent;
  }

  set categoryParent(value: Category | undefined) {
    this._categoryParent = value;
  }
}
