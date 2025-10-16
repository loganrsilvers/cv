<?php
if (isset($_POST['email'])) {
  $email_to = "loganrsilvers@gmail.com";
  $email_subject = "web submission";
  $name = $_POST['fullName'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $message, $headers);
  echo "Thanks for contacting us!";
}
?>