class Curl {
  constructor() { }
  getAllDatas() {
    return this.ajaxGenery({ "order": "get" });
  }
  insertUser(user) {
    return this.ajaxGenery({ "order": "newUser", "email": user.email, "pass": user.pass });
  }
  curLogin(user) {
    return this.ajaxGenery({ "order": "login", "email": user.email, "pass": user.pass });
  }
  insertNewBuy(datos, user) {
    return this.ajaxGenery({ "order": "insertNewB", "data": datos, "user": user });
  }
  getHistory(user) {
    return this.ajaxGenery({ "order": "history", "email": user.email });
  }
  ajaxGenery(value) {
    return new Promise(resolve => {
      $.ajax({
        type: 'post',
        url: 'src/php/connecServer.php',
        data: value
      }).done((result) => {
        resolve(JSON.parse(result));
      });
    });
  }
}
