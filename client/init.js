const view = new ShopView(window.document);
const service = new ServiceShop(new Cart(), new Curl());
const controller = new ShopController({ "serviceShop": service, "view": view });
controller.checkLogin();