class ServiceShop {
  constructor(cart, curl) {
    this._cart = cart;
    this._listProduc = [];
    this._curl = curl;
    this._storage = window.localStorage;
  }
  get cart() {
    return this._cart.cartProduc;
  }
  newUser(user) {
    if (user.pass === user.pass2) {
      return this._curl.insertUser(user);
    }
    return new Promise(resolve => {
      resolve("Las contaseña no son iguales");
    });
  }
  goLogin(user) {
    return this._curl.curLogin(user);
  }
  insertSession(email) {
    this._storage.setItem('user', email);
  }
  getSession() {
    return this._storage.getItem('user');
  }
  createAllProduc() {
    return this._curl.getAllDatas().then((resolve) => {
      this._listProduc = resolve.reduce((acc, value) => {
        const obje = new Produc(value);
        return (acc = [...acc, obje]);
      }, []);
      return this._listProduc;
    });
  }
  filterProduc(filter) {
    let result = false;
    return this._listProduc.reduce((acc, value) => {
      if (filter.cat === "all" || value.cat === filter.cat) {
        result = true;
      }
      if (filter.price !== "" && filter.price > 0 && value.price > filter.price) {
        result = false;
      }
      if (result) {
        result = false;
        return (acc = [...acc, value]);
      }
      return acc;
    }, []);
  }
  addProducCart(producId) {
    return this._cart.addProduc(this.filterCodeProduc(producId));
  }
  filterCodeProduc(producId) {
    producId = parseInt(producId);
    return this._listProduc.find(value => value.id === producId);
  }
  calculatePriceAllP() {
    return this._cart.calculatePrice();
  }
  deleteQuantityProduct(producId) {
    return this._cart.deletePerQuantity(this.filterCodeProduc(producId));
  }
  deleterProduc(producId) {
    return this._cart.deleteProducCart(this.filterCodeProduc(producId));
  }
  goBuy(dataForm) {
    return new Promise(resolve => {
      const comprobate = this.getSession();
      if (comprobate === undefined || comprobate === "") {
        return resolve("login");
      }
      if (dataForm.name === "" || dataForm.address === "") {
        return resolve("data");
      }
      const result = { email: comprobate, dataForm: dataForm };
      resolve(this._curl.insertNewBuy(this._storage.getItem("cart"), JSON.stringify(result)));
    });
  }
  getHistory() {
    return this._curl.getHistory({ email: this.getSession() });
  }
  clearCart() {
    this._cart.clearCart();
  }
}