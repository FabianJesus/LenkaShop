class Cart {
  constructor() {
    this._box = [];
    this._storage = window.localStorage;
    this.cacheCart();
  }
  get cartProduc() {
    return this._box;
  }
  cacheCart() {
    if (this._storage.getItem('cart')) {
      this.createProductCache(JSON.parse(this._storage.getItem("cart")));
    }
  }
  createProductCache(array) {
    array.map((value) => {
      value.produc = this.createPerson(value.produc);
    });
    this._box = array;
  };
  createPerson(produc) {
    return new Produc({ name: produc._name, price: produc._price, cat: produc._cat, id: produc._id, img: produc._img });
  }
  addProduc(produc) {
    return new Promise(resolve => {
      if (this.existProducInBox(produc)) {
        this._box.map(value => {
          if (value.produc.id === produc.id) {
            value.quantity++;
          }
        });
      } else {
        this._box.push({ quantity: 1, produc: new Produc(produc) });
      }
      this._storage.setItem("cart", JSON.stringify(this._box));
      resolve();
    });
  }
  existProducInBox(produc) {
    return this._box.find(value => value.produc.id === produc.id);
  }
  calculatePrice() {
    return this._box.reduce((acc, value) => {
      return (acc += value.produc.price * value.quantity);
    }, 0);
  }
  deletePerQuantity(produc) {
    return new Promise(resolve => {
      if (this.existProducInBox(produc)) {
        this._box.map(value => {
          if (value.produc.id === produc.id) {
            value.quantity--;
          }
          if (value.quantity === 0) {
            this.deleteProducCart(value.produc);
          }
        });
      }
      this._storage.setItem("cart", JSON.stringify(this._box));
      resolve();
    });
  }
  deleteProducCart(produc) {
    return new Promise(resolve => {
      this._box = this._box.reduce((acc, value) => {
        if (value.produc.id !== produc.id) {
          acc.push(value);
        }
        return acc;
      }, []);
      this._storage.setItem("cart", JSON.stringify(this._box));
      resolve();
    });
  }
  clearCart() {
    this._storage.setItem("cart", "");
    this._box = [];
  }
}