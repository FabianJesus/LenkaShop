<?php
ini_set('error_reporting', E_ALL ^ E_NOTICE ^ E_WARNING);
ini_set('display_errors', 'on');
ini_set('max_execution_time', 10);
require_once("Login.class.php");
require_once("Produc.class.php");
$value = $_REQUEST;
$login = new Login();
$produc = new Produc();
if($value['order'] === "get"){
    $result = $produc->getProduct();
}
if($value['order'] === "newUser"){
    $result = $login->insertarNuevoUsuario($_REQUEST['email'],$_REQUEST['pass']);
}
if($value['order'] === "login"){
    $result = $login->verificarUsuario($_REQUEST['email'],$_REQUEST['pass']);
}
if($value['order'] === "insertNewB"){
    $result = $produc->insertNewBuy($_REQUEST['data'],$_REQUEST['user']);
}if($value['order'] === "history"){
    $result = $produc->history($_REQUEST['email']);
}
echo json_encode($result);