<?php
require_once("bbdd.class.php");
require_once("PHPmailer/envio.class.php");
date_default_timezone_set('Europe/Madrid');
setlocale(LC_TIME, 'es_ES.UTF-8');
setlocale(LC_TIME, 'spanish');
class Produc{
    private $conexion,$stmt,$consulta;
    function __construct() {
        $this->envio = new Mail();
        $bbd = new bbdd();
        $this->conexion = $bbd->obtenerConec(); 
        if ($this->conexion->connect_errno) {
            echo "Fallo de conexion al MySQL: (" . $this->conexion->connect_errno . ") " . $this->conexion->connect_error;
        }else{
            $this->consulta = "SELECT `produc`.`ID`,`produc`.`NOMBRE`, `produc`.`PRECIO`, `produc`.`CATEGORIA`, `produc`.`IMG` FROM `produc`;";
        }
    }
    public function getProduct(){
        $this->stmt = $this->conexion->prepare($this->consulta);
        $this->stmt->execute();
        $this->stmt->bind_result($id,$name,$precio,$categoria,$foto);
        while ( $this->stmt->fetch()){
            $result [] =["name" => $name, "price" => $precio, "img" => $foto, "cat" => $categoria, "id" => $id];
       }
        return $result;
    }
    public function insertNewBuy($datas,$user){
        $estado="Su compra se ha realizado correctamente. ";
        $codeCompara = date("Ymds");
        $datas = json_decode($datas);
        $user = json_decode($user);
        $idU = $this->getIdUser($user->email);
        $user->codeC = $codeCompara;
        $stmt = $this->conexion->prepare("INSERT INTO `buy` (`ID`, `ID_U`, `ID_P`, `CANTIDAD`, `PRECIO`, `COD_COMPRA`, `FECHA`) VALUES (NULL, ?, ?, ?, ?, ?, NOW());");
        foreach ($datas as $valor){
            $cantidad = $valor->quantity;
            $idP = $valor->produc->_id;
            $precio = $valor->produc->_price;
            $stmt->bind_param("iiiis", $idU,$idP,$cantidad,$precio,$codeCompara);
            if(!$stmt->execute()){
                $estado = $stmt->error;
            };
           
        }
        $estado .= $this->envio->sendEmail($datas,$user);
        return $estado;
    }
    private function getIdUser($user){
        $stmt = $this->conexion->prepare("SELECT `user`.`ID` FROM `user` where `user`.`EMAIL` = '$user' ");
        $stmt->execute();
        $stmt->bind_result($id);
        if ($stmt->fetch()){
            $estado = $id;
       }
       return $estado;
    }
    public function history($user){
        $idU = $this->getIdUser($user);
        $this->stmt = $this->conexion->prepare("SELECT `produc`.`NOMBRE`,`produc`.`CATEGORIA`,`produc`.`IMG` ,`buy`.`PRECIO`, `buy`.`CANTIDAD`, `buy`.`COD_COMPRA`, `buy`.`FECHA`
        FROM `produc`
            , `buy` where `produc`.`ID`=`buy`.`ID_P` AND `buy`.`ID_U`= ? ORDER BY `buy`.`FECHA` DESC");
        $this->stmt->bind_param("i", $idU);
        $this->stmt->execute();
        $this->stmt->bind_result($name,$categoria,$img,$price,$quanty,$codeC,$date);
        while ( $this->stmt->fetch()){
            $result [] =["name" => $name, "price" => $price, "quanty" => $quanty, "date" =>  strftime("%d de %B del %Y",strtotime($date)),"codC"=>$codeC,"cat"=>$categoria,"img"=>$img];
       }
        return $result;
    }
}