<?php
$toEmail = "alina_vinogradova_92@mail.ru";


$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

/* дополнительные шапки */
$headers .= "From: FuelLabs <info@fuel-labs.com>\r\n";


$name = $_REQUEST['name'] ? 'Имя : ' . $_REQUEST['name'] . '<br>' : "";
$email = $_REQUEST['email'] ? 'Email: '. $_REQUEST['email'] . '<br>' : "";
$text = $_REQUEST['text'] ? 'Текст: '. $_REQUEST['text'] . '<br>' : "";
$tel = $_REQUEST['tel'] ? 'Телефон: '. $_REQUEST['tel'] . '<br>' : "";



$msg =  $name . $email .$text . $tel;

mail($toEmail, 'FuelLabs', $msg, $headers);