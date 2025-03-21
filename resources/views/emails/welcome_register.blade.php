<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to [Your Company Name]!</title>
  <style>
    /* Reset CSS */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f4;
    }

    /* Container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    /* Header */
    .header {
      background-color: #007BFF;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }

    .header img {
      width: 80px;
      height: auto;
      margin-bottom: 10px;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    /* Body */
    .body-content {
      padding: 20px;
      color: #333333;
    }

    .body-content h2 {
      font-size: 20px;
      color: #007BFF;
      margin-bottom: 15px;
    }

    .body-content p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .body-content .icon {
      text-align: center;
      margin: 20px 0;
    }

    .body-content .icon img {
      width: 80px;
      height: auto;
    }

    .body-content .cta-button {
      display: inline-block;
      background-color: #007BFF;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 20px;
    }

    .body-content .cta-button:hover {
      background-color: #0056b3;
    }

    /* Footer */
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666666;
    }

    .footer a {
      color: #007BFF;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 600px) {
      .email-container {
        width: 100%;
        border-radius: 0;
      }

      .header h1 {
        font-size: 20px;
      }

      .body-content h2 {
        font-size: 18px;
      }

      .body-content p {
        font-size: 14px;
      }

      .header img {
        width: 60px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Section -->
    <div class="header">
      <img src="https://res.cloudinary.com/dcbantk1f/image/upload/v1741927569/Screenshot_20-removebg-preview_tmftvs.png">
      <h1>Welcome to [Your Company Name]!</h1>
    </div>

    <!-- Body Section -->
    <div class="body-content">
      <div class="icon">
        <img src="https://img.icons8.com/color/96/000000/welcome.png" alt="Welcome Icon">
      </div>
      <h2>Hello, {{ $name }}!</h2>
      <p>Thank you for registering with <strong>[Your Company Name]</strong>. We're thrilled to have you on board!</p>
      <p>Your account has been successfully created, and you can now access all the features and benefits of our platform.</p>
      <p>To get started, click the button below to log in to your account:</p>
      <p style="text-align: center;">
        <a href="[Login URL]" class="cta-button">Log In to Your Account</a>
      </p>
      <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
      <p>Welcome aboard, and we look forward to serving you!</p>
      <p>Best regards,</p>
      <p><strong>The [Your Company Name] Team</strong></p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>You received this email because you registered an account with [Your Company Name]. If this wasn't you, please <a href="mailto:support@yourcompany.com">contact us</a>.</p>
      <p>&copy; 2023 [Your Company Name]. All rights reserved.</p>
    </div>
  </div>
</body>
</html>