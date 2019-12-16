class ShopController {
  constructor(shopController) {
    this._serviceShop = shopController.serviceShop;
    this._view = shopController.view;
    this.viewOpen();
  }
  priceFilter
  addNewUser() {
    this._serviceShop.newUser(this._view.getDataUser()).then(resolve => {
      this._view.paintModalKO();
      this._view.notification(resolve);
    })
  }
  clearCart() {
    this._serviceShop.clearCart();
    this._view.clearCart();
  }
  paintModalNew() {
    this._view.paintModalNew();
  }
  login() {
    this._serviceShop.goLogin(this._view.getDataUser()).then(resolve => {
      this._view.notification(resolve);
      if (resolve === "Bienvenido") {
        const user = this._view.getDataUser();
        this._serviceShop.insertSession(user.email);
        this._view.paintModalOK();
      }
    })
  }
  goMap() {
    this._view.paintMap();
  }
  paintModalDefault() {
    this._view.paintModalKO();
    this._serviceShop.clearCart();
  }
  deleteSesion() {
    this._serviceShop.insertSession("");
    this._view.refresUser(this._serviceShop.getSession());
    this._view.goIndex();
  }
  checkLogin() {
    this._view.refresUser(this._serviceShop.getSession());
  }
  viewOpen() {
    this._serviceShop.createAllProduc().then(resolve => {
      this._view.paintProducts(resolve);
    });

    this._view.paintProductsCart(this._serviceShop.cart);
    this._view.paintPriceTotalInCart(this._serviceShop.calculatePriceAllP());
  }
  filterPrice() {
    this._view.filterPriceProduc();
  }
  filter(cat) {
    const price = this._view.getPriceFilter();
    this._view.paintProducts(
      this._serviceShop.filterProduc({ "cat": cat, "price": price })
    );
  }
  addProducInCart(producCod) {
    this._serviceShop.addProducCart(producCod).then(resolve => {
      this._view.paintProductsCart(this._serviceShop.cart);
      this._view.paintPriceTotalInCart(this._serviceShop.calculatePriceAllP());
    });
  }
  goCart() {
    this._view.paintCart(this._serviceShop.cart);
    this._view.paintPriceTotal(this._serviceShop.calculatePriceAllP());
  }
  addQProducCart(producCod) {
    this._serviceShop.addProducCart(producCod).then(resolve => {
      const cart = this._serviceShop.cart;
      this._view.paintProductPanelCart(cart);
      this._view.paintProductsCart(cart);
      this._view.paintPriceTotal(this._serviceShop.calculatePriceAllP());
      this._view.paintPriceTotalInCart(this._serviceShop.calculatePriceAllP());
    });
  }
  deleterPerQProducCart(producCod) {
    this._serviceShop.deleteQuantityProduct(producCod).then(resolve => {
      const cart = this._serviceShop.cart;
      this._view.paintProductPanelCart(cart);
      this._view.paintProductsCart(cart);
      this._view.paintPriceTotal(this._serviceShop.calculatePriceAllP());
      this._view.paintPriceTotalInCart(this._serviceShop.calculatePriceAllP());
    });
  }
  deleterProducCart(producCod) {
    this._serviceShop.deleterProduc(producCod).then(resolve => {
      const cart = this._serviceShop.cart;
      this._view.paintProductPanelCart(cart);
      this._view.paintProductsCart(cart);
      this._view.paintPriceTotal(this._serviceShop.calculatePriceAllP());
      this._view.paintPriceTotalInCart(this._serviceShop.calculatePriceAllP());
    });
  }
  buy() {
    this._serviceShop.goBuy(this._view.getValuesForm()).then(resolve => { this._view.notification(resolve); if (resolve !== "login" && resolve !== "data") { this.clearCart(); this.lookHistory() } });
  }
  lookHistory() {
    this._serviceShop.getHistory().then(resolve => this._view.goHistory(resolve));
  }
}
