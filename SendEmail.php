<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data to prevent XSS
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Set email recipient and subject
    $to = "your-email@example.com";  // Replace with your email
    $subject = "New Contact Form Message from $name";

    // Set the headers for the email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Construct the email body
    $body = "You received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request method.";
}
?>
