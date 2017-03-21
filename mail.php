<?php
$toEmail = "alina_vinogradova_92@mail.ru";


$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

/* дополнительные шапки */
$headers .= "From: FuelLabs <admin@site.ru>\r\n";


$msg = 'Имя : ' . $_REQUEST['name'] . 
"\r\n" . 'Email: '. $_REQUEST['email'] .
"\r\n\r\n" . 'Текст: '. $_REQUEST['text'];

if(mail($toEmail, 'FuelLabs', $msg, $headers)) {
print "<p class='email-succes'>Сообщение было отправлено!</p>";
} else {
print "<p class='email-error'>Ошибка при отправке.</p>";
}
?>