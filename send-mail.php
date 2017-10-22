<?php
define('RECIPIENT','jerohlsen@gmail.com');
//catch the posted data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = "j-ohlsen MAIL";
$message = $_POST['message'];
//set the email body and headers
$body = $message."\n\n";
$body.= $name."<$email>";
$headers = "From: $name<$email>";
if(mail(RECIPIENT, $subject, $body, $headers)):
echo "success";
else:
echo "error";
endif;
?>