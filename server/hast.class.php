<?php
class Password {
    const SALT = 'EstoEs65349LaTienDA';
    public function hash($password) {
        return hash('sha512', self::SALT . $password);
    }
    public function verify($password, $hash) {
        return ($hash == self::hash($password));
    }
}
