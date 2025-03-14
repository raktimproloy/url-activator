<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Newsletter!</title>
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
      <img src="https://via.placeholder.com/80" alt="Your Company Logo">
      <h1>Welcome to Our Newsletter!</h1>
    </div>

    <!-- Body Section -->
    <div class="body-content">
      <div class="icon">
        <img src="https://img.icons8.com/color/96/000000/newsletter.png" alt="Newsletter Icon">
      </div>
      <h2>Thank You for Subscribing!</h2>
      <p>Hello {{ $name }},</p>
      <p>We're thrilled to have you join our community! By subscribing to our newsletter, you'll receive the latest updates, exclusive content, and special offers directly in your inbox.</p>
      <p>Here’s what you can expect:</p>
      <ul>
        <li>📰 Weekly updates on [Your Industry/Topic]</li>
        <li>🎁 Exclusive discounts and promotions</li>
        <li>💡 Tips, insights, and expert advice</li>
      </ul>
      <p>If you ever have any questions or feedback, feel free to reply to this email. We'd love to hear from you!</p>
      <p>Stay tuned for our first newsletter. In the meantime, check out our website to explore more:</p>
      <p style="text-align: center;">
        <a href="[Your Website URL]" class="cta-button">Visit Our Website</a>
      </p>
      <p>Thank you for being part of our journey!</p>
      <p>Best regards,</p>
      <p><strong>The [Your Company Name] Team</strong></p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>You received this email because you subscribed to our newsletter. If you no longer wish to receive these emails, <a href="[Unsubscribe URL]">unsubscribe here</a>.</p>
      <p>&copy; 2023 [Your Company Name]. All rights reserved.</p>
    </div>
  </div>
</body>
</html>