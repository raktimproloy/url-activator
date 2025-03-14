<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
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
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Section -->
    <div class="header">
      <h1>Thank You for Contacting Us!</h1>
    </div>

    <!-- Body Section -->
    <div class="body-content">
      <div class="icon">
        <img src="https://img.icons8.com/color/96/000000/thank-you.png" alt="Thank You Icon">
      </div>
      <h2>We Appreciate Your Message</h2>
      <p>Hello there,</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible. Our team is excited to assist you and provide the best support.</p>
      <p>If you have any urgent inquiries, feel free to reply to this email or contact us directly at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
      <p>Warm regards,</p>
      <p><strong>The [Your Company Name] Team</strong></p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>You received this email because you contacted us. If you have any questions, please <a href="mailto:support@yourcompany.com">contact us</a>.</p>
      <p>&copy; 2023 [Your Company Name]. All rights reserved.</p>
    </div>
  </div>
</body>
</html>