<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Email setup
    $to = "tatebyers@protonmail.com";
    $subject = "New Contact Form Message from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Attempt to send email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: thank-you.html"); // Redirect on success
        exit;
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
