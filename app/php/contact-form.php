<?php

/* Задаем переменные */
$name      = htmlspecialchars($_POST["name"]);
$tel        = htmlspecialchars($_POST["tel"]);
$city        = htmlspecialchars($_POST["city"]);
$email      = htmlspecialchars($_POST["email"]);
$link      = htmlspecialchars($_POST["fb_ins"]);

/* Ваш адрес и тема сообщения */
$address = "yudginburger@gmail.com";
$sub = "Заявка на франшизу";

/* Формат письма */
$mes = "
<table width='100%' cellspacing='0' cellpadding='4' border='1'>
    <tr>
        <td width='20%'>Имя:</td>
        <td>$name</td>
    </tr>
    <tr>
      <td>Телефон:</td>
      <td>$tel</td>
    </tr>
    <tr>
        <td>Email:</td>
        <td>$email</td>
    </tr>
    <tr>
      <td>Город:</td>
      <td>$city</td>
    </tr>
    <tr>
      <td>Ссылка:</td>
      <td>$link</td>
    </tr>
</table>
";

 $headers = "From: " . $address . "\r\n";
 $headers .= "Reply-To: ". $email . "\r\n";
 $headers .= "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

/* Отправляем сообщение, используя mail() функцию */
$from  = 'fanatblizzard@gmail.com';
mail($address, $sub, $mes, $headers);
?>
