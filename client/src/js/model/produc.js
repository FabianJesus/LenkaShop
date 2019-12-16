class Produc {
  constructor(produc) {
    this._name = produc.name;
    this._price = produc.price;
    this._img = produc.img;
    this._cat = produc.cat;
    this._id = produc.id;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get img() {
    return this._img;
  }
  get cat() {
    return this._cat;
  }
  get id() {
    return this._id;
  }
}
