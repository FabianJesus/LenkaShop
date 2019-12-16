const TEMPLATE = {
  CART: `<div class="content-wrap">

<div class="container clearfix">

  <div class="table-responsive">
    <table class="table cart">
      <thead>
        <tr>
          <th class="cart-product-remove">&nbsp;</th>
          <th class="cart-product-thumbnail">&nbsp;</th>
          <th class="cart-product-name">Producto</th>
          <th class="cart-product-price">Precio por unidad</th>
          <th class="cart-product-quantity">Cantidad</th>
          <th class="cart-product-subtotal">Total</th>
        </tr>
      </thead>
      <tbody id="produc_car">
      </tbody>

    </table>
  </div>
  <section class="row">
  <div class="row col-lg-6 clearfix">
    <div class="col-lg-4 ">
      <input class="form-control m-1" type="text" id="name" placeholder="Nombre">
    </div>
    <div class="col-lg-7">
      <input class="form-control m-1" type="text" id="address" placeholder="Direccion">
    </div>
  </div>
    <div class="col-lg-5 clearfix">
      <div class="table-responsive">
        <table class="table cart">
          <tbody>
            <tr class="cart_item">
              <td class="cart-product-name">
                <strong>Total</strong>
              </td>

              <td class="cart-product-name">
                <span class="amount color lead"><strong id="totalPrice">0€</strong></span>
              </td>
            </tr>
          </tbody>
        </table>
        <a onclick="controller.buy()" class="button button-3d notopmargin fright">Proceder Al Pago</a>
        <a onclick="controller.clearCart()" class="button button-3d notopmargin fright">Borrar Todo</a>
      </div>
    </section>
  </div>
  </div>
</div>`
};
