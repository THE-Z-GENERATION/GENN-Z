<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    mail("sheikhkalimulla01@gmail.com", "New Inquiry", "Name: $name\nEmail: $email\nMessage: $message");
    echo "Message sent successfully!";
}
?>
