<?php
require_once("hast.class.php");
require_once("bbdd.class.php");
class Login {
    private $conexion,$hast;
    function __construct() {
        $this->hast = new Password();
        $bbd = new bbdd();
        $this->conexion = $bbd->obtenerConec();
    }
    public function insertarNuevoUsuario ($user,$pass){
        $estado = "Usuario Creado";
        $passHast =  $this->hast->hash($pass);
        $sentencia = $this->conexion->prepare("INSERT INTO `user` (`EMAIL`,`PASSWORD`) VALUES (?, ?);");
        $sentencia->bind_param("ss", $user,$passHast);
        if(!$sentencia->execute()){
            $estado = $stmt->error;
        };
        return $estado;
    }
    public function verificarUsuario ($user,$passUser){
        $estado = "Usuario erroneo";
        $stmt = $this->conexion->prepare("SELECT EMAIL,`PASSWORD` FROM `user` WHERE EMAIL = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt->bind_result($userR,$passw);
        if($stmt->fetch()){
            if ($this->hast->verify($passUser,$passw)) {
                $estado = 'Bienvenido';
            }
        }
        return $estado;
    }
}