<?php
class bbdd{
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $db = "shopFaby";
    function __construct()
    {
        $this->conexion = new mysqli($this->servername, $this->username, $this->password,$this->db);
        $this->conexion->set_charset('utf8');
    }
    function obtenerConec(){
        return $this->conexion;
    }
}