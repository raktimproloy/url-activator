<!DOCTYPE html>
<html>
<head>
    <title>Thank You for Contacting Us</title>
</head>
<body>
    <h1>Thank You, {{ $name }}!</h1>
    <p>We have received your message regarding <strong>{{ $subject }}</strong>.</p>
    <p>Your message:</p>
    <p>{{ $messageContent }}</p>
    <p>We will get back to you as soon as possible.</p>
    <p>Best regards,</p>
    <p>Your Company Name</p>
</body>
</html>