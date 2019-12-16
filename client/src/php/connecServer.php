<?php
ini_set('error_reporting', E_ALL ^ E_NOTICE ^ E_WARNING);
ini_set('display_errors', 'on');
ini_set('max_execution_time', 10);

define("URL", "http://localhost/proyecto/server/requireDB.php");

$request = $_REQUEST;

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, URL);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($ch);
echo $result;
