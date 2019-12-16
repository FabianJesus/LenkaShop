class ShopView {
  constructor(dom) {
    this._dom = dom;
  }
  getDataUser() {
    let pass2 = "";
    if (this._dom.getElementById('pass2')) {
      pass2 = this._dom.getElementById('pass2').value;
    }
    return { "email": this._dom.getElementById('email').value, "pass": this._dom.getElementById('pass').value, "pass2": pass2 };
  }
  getValuesForm() {
    return { "name": this._dom.getElementById('name').value, "address": this._dom.getElementById('address').value }
  }
  paintProducts(product) {
    this._dom.getElementById('shop').innerHTML = product.reduce(
      (acc, value) => {
        return (acc +=
          `<div class="product clearfix pf-dress" onclick="controller.addProducInCart(` +
          value.id +
          `)">
        <div class="product-image">
          <a href="#"><img src="src/assest/images/shop/` +
          value.cat +
          `/` +
          value.img +
          `" alt="Checked Short Dress"></a>
          <div class="product-overlay">
            <a href="#" class="add-to-cart"><i class="icon-shopping-cart"></i><span> Añadir al carro</span></a>
          </div>
        </div>
        <div class="product-desc">
          <div class="product-title"><h3><a href="#">` +
          value.name +
          `</a></h3></div>
          <div class="product-price"><ins>` +
          value.price +
          `€</ins></div>
        </div>
      </div>`);
      },
      ''
    );
  }
  filterPriceProduc() {
    $('.activeFilter').click();
  }
  getPriceFilter() {
    return this._dom.getElementById('priceM').value;
  }
  notification(result) {
    this._dom.getElementById('boxModalInfo').innerHTML = result;
    if (result === "login") {
      this._dom.getElementById('boxModalInfo').innerHTML = "Debes loguearte para poder comprar";
      $('#info').modal(focus);
      $('#exampleModal').modal('show');
      return;
    }
    if (result === "data") {
      this._dom.getElementById('boxModalInfo').innerHTML = "Debes rellenar los campos Nombre y Direccion";
    }
    $('#info').modal(focus);
    if (result === "Bienvenido") {
      const user = this.getDataUser();
      this.paintGreet(user.email);
    }
  }
  refresUser(email) {
    this.paintModalOK(email);
    if (email === null || email === "") {
      email = "Login";
      this.paintModalKO();
    }
    this.paintGreet(email);
  }
  paintGreet(email) {
    this._dom.getElementById('emailUser').innerHTML = email;
  }
  paintModalOK(email) {
    if (email === undefined) {
      email = this._dom.getElementById('email').value;
    }
    this._dom.getElementById('boxModal').innerHTML = MODEL.OK;
    this._dom.getElementById('email').innerHTML = email;
  }
  paintModalKO() {
    this._dom.getElementById('boxModal').innerHTML = MODEL.KO;
  }
  paintModalNew() {
    this._dom.getElementById('boxModal').innerHTML = MODEL.NEW;
  }
  paintProductsCart(cart) {
    this._dom.getElementById('cart').innerHTML = cart.reduce((acc, value) => {
      return (acc +=
        `<div class="top-cart-item clearfix">
      <div class="top-cart-item-image">
        <a href="#"><img src="src/assest/images/shop/` +
        value.produc.cat +
        `/` +
        value.produc.img +
        `" alt="` +
        value.produc.name +
        `" /></a>
      </div>
      <div class="top-cart-item-desc">
        <a href="#">` +
        value.produc.name +
        `</a>
        <span class="top-cart-item-price">` +
        value.produc.price +
        `€</span>
        <span class="top-cart-item-quantity">x ` +
        value.quantity +
        `</span>
      </div>
    </div>`);
    }, '');
    this.paintIconCart(cart);
  }
  clearCart() {
    this._dom.getElementById('cart').innerHTML = "";
    this._dom.getElementById('totalPriceInCart').innerHTML = "0€";
    this._dom.getElementById('num_iconCart').innerHTML = 0;
    if (this._dom.getElementById('produc_car')) {
      this._dom.getElementById('produc_car').innerHTML = "";
      this._dom.getElementById('totalPrice').innerHTML = "0€";
    }
  }
  paintIconCart(cart) {
    this._dom.getElementById('num_iconCart').innerHTML = cart.reduce(
      (acc, value) => {
        return (acc += value.quantity);
      },
      0
    );
  }
  paintPriceTotal(price) {
    this._dom.getElementById('totalPrice').innerHTML = price + '€';
  }
  paintPriceTotalInCart(price) {
    this._dom.getElementById('totalPriceInCart').innerHTML = price + '€';
  }
  paintCart(cart) {
    this._dom.getElementById('content').innerHTML = TEMPLATE.CART;
    this.paintProductPanelCart(cart);
  }
  paintProductPanelCart(cart) {
    this._dom.getElementById('produc_car').innerHTML = cart.reduce(
      (acc, value) => {
        return (acc +=
          ` <tr class="cart_item">
        <td class="cart-product-remove">
          <a href="#" onclick="controller.deleterProducCart('`+ value.produc.id + `')" class="remove" title="Remove this item"><i class="icon-trash2"></i></a>
        </td>

        <td class="cart-product-thumbnail">
          <a href="#"><img src="src/assest/images/shop/` +
          value.produc.cat +
          `/` +
          value.produc.img +
          `" alt="` +
          value.produc.name +
          `" /></a>
        </td>

        <td class="cart-product-name">
          <a href="#">` +
          value.produc.name +
          `</a>
        </td>

        <td class="cart-product-price">
          <span class="amount">` +
          value.produc.price +
          `€</span>
        </td>
        <td class="cart-product-quantity">
          <div class="quantity clearfix">
            <input type="button" value="-" class="minus" onclick="controller.deleterPerQProducCart('`+ value.produc.id + `')"/>
            <input type="text" name="quantity" value="`+ value.quantity + `" class="qty" />
            <input type="button" value="+" class="plus" onclick="controller.addQProducCart('`+ value.produc.id + `')"/>
        </td>

        <td class="cart-product-subtotal">
          <span class="amount">` +
          value.produc.price * value.quantity +
          `</span>€
        </td>
        </div>
      </tr>`);
      },
      ''
    );
  }
  paintMap() {
    this._dom.getElementById('content').innerHTML = MAP;
  }
  goHistory(history) {
    $('#exampleModal').modal('hide');
    let codC = "";
    this._dom.getElementById('content').innerHTML = HISTORY;
    this._dom.getElementById('produc_car').innerHTML += history.reduce((acc, value) => {
      if (codC !== value.codC) {
        acc += ` <tr class="cart_item">
        <td class="cart-product-thumbnail" colspan="2"><span class="mr-2">Codigo de compra:</span><span>` +
          value.codC +
          `</span></td>
        <td class="cart-product-name" colspan="2"><span class="mr-2">Fecha:</span><span>` +
          value.date +
          `</span></td>
      </tr>`;
        codC = value.codC;
      }
      return (acc +=
        ` <tr class="cart_item">

      <td class="cart-product-thumbnail">
        <a href="#"><img src="src/assest/images/shop/` +
        value.cat +
        `/` +
        value.img +
        `" alt="` +
        value.name +
        `" /></a>
      </td>

      <td class="cart-product-name">
        <a href="#">` +
        value.name +
        `</a>
      </td>

      <td class="cart-product-price">
        <span class="amount">` +
        value.price +
        `€</span>
      </td>
      <td class="cart-product-quantity">
        <span class="amount">Cantidad: ` +
        value.quanty +
        `</span>
   
      </td>
      </div>
    </tr>`);

    }, '');
  }
  goIndex() {
    document.location.href = "index.html";
  }
}
