<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
class Mail{
    function __construct()
    {
        $this->mail = new PHPMailer(true);
        $this->mail->isSMTP();
        $this->mail->CharSet = 'UTF-8';                                          
        $this->mail->Host       = 'smtp.gmail.com';                  
        $this->mail->SMTPAuth   = true;                                   
        $this->mail->Username   = 'proyecWeb2019@gmail.com';                  
        $this->mail->Password   = 'proyec123456789';                               
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
        $this->mail->Port       = 587;                            
        $this->mail->setFrom('proyecWeb2019@gmail.com', 'LenkaShop');
}
    public function sendEmail($datas,$user){
        try{
                $dataForm = $user->dataForm;
                $this->mail->addAddress('proyecWeb2019@gmail.com');
                $this->mail->addAddress($user->email);
    
                $this->mail->isHTML(true); 
                $this->mail->Subject = 'Compra confirmada cod:'.$user->codeC;
                $this->mail->Body = '
                <label>Nombre: </label>'.$dataForm->name.'<br>
                <label>Direccion: </label>'.$dataForm->address.'<br>
                <h3>Productos</h3>';
                $total = 0;
                    foreach($datas as $value){
                        $price= (int)$value->produc->_price;
                        $quantity = (int)$value->quantity;
                        $this->mail->Body .= '<label>nombre: </label>'.$value->produc->_name.'<br>';
                        $this->mail->Body .= '<label>cantidad: </label>'.$quantity.'<br>';
                        $this->mail->Body .= '<label>precio por producto: </label>'.$price.'<br>';
                        $result = $price*$quantity;
                        $total = $total+$result;
                    }
                $this->mail->Body .= '<label>Total: </label>'.$total.'<br>';
                $this->mail->send();
                $status = 'Se ha mandado un mensaje a su correo con los datos de la compra.';
            } catch (Exception $e) {
                $status = "El mensaje no ha podido enviarse por:".$this->mail->ErrorInfo;
            }
            return $status;
    }
}
        
  