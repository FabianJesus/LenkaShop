const MODEL = {
  KO: `<div class="modal-header d-flex justify-content-between align-items-center">
  <span>Bienvenido</span>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  <div class="modal-body" >
  <input class="form-control m-2 p-1" type="email" id="email" placeholder="Email">
    <input class="form-control m-2 p-1" type="password" id="pass" placeholder="Pass">
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.login()">Logearse</button>
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.paintModalNew()">Nuevo
      Usuario</button></div>`,
  OK: `<div class="modal-header d-flex justify-content-between align-items-center">
    <span class="mr-3">Hola</span>
    <span id="email"></span>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body" >
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.lookHistory()">Historial</button>
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.deleteSesion()">Cerrar Sesion</button></div>`,
  NEW: `<div class="modal-header d-flex justify-content-between align-items-center">
  <span>Registro</span>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  <div class="modal-body" ><input class="form-control m-2 p-1" type="email" id="email" placeholder="Email">
    <input class="form-control m-2 p-1" type="password" id="pass" placeholder="Pass">
    <input class="form-control m-2 p-1" type="password" id="pass2" placeholder="Pass">
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.addNewUser()">Registrarse</button>
    <button type="button" class="btn btn-secondary m-2 p-1" onclick="controller.paintModalDefault()">Cerrar</button></div>`,
}