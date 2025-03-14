<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Purchase Confirmation</title>
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

    /* Invoice Section */
    .invoice {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    .invoice h3 {
      font-size: 18px;
      color: #007BFF;
      margin-bottom: 10px;
    }

    .invoice table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }

    .invoice table th,
    .invoice table td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    .invoice table th {
      background-color: #f1f1f1;
    }

    .invoice-buttons {
      text-align: center;
      margin-top: 20px;
    }

    .invoice-buttons .btn {
      display: inline-block;
      background-color: #007BFF;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 14px;
      margin: 0 5px;
    }

    .invoice-buttons .btn:hover {
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

      .invoice-buttons .btn {
        display: block;
        margin: 10px auto;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Section -->
    <div class="header">
      <img src="https://via.placeholder.com/80" alt="Your Company Logo">
      <h1>Subscription Purchase Confirmation</h1>
    </div>

    <!-- Body Section -->
    <div class="body-content">
      <h2>Hello, {{ $name }}!</h2>
      <p>Thank you for purchasing a subscription with <strong>[Your Company Name]</strong>. Your payment has been successfully processed, and your subscription is now active.</p>

      <!-- Invoice Section -->
      <div class="invoice">
        <h3>Invoice Details</h3>
        <table>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>{{ $planName }} ({{ $duration }})</td>
            <td>{{ $price }}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>{{ $tax }}</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>{{ $total }}</strong></td>
          </tr>
        </table>
        <div class="invoice-buttons">
          <a href="[Invoice Download URL]" class="btn">Download Invoice</a>
          <a href="javascript:window.print()" class="btn">Print Invoice</a>
        </div>
      </div>

      <p>You can now enjoy all the benefits of your subscription. To access your account, click the button below:</p>
      <p style="text-align: center;">
        <a href="[Dashboard URL]" class="btn">Go to Your Dashboard</a>
      </p>

      <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
      <p>Thank you for choosing [Your Company Name]!</p>
      <p>Best regards,</p>
      <p><strong>The [Your Company Name] Team</strong></p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>You received this email because you purchased a subscription with [Your Company Name]. If this wasn't you, please <a href="mailto:support@yourcompany.com">contact us</a>.</p>
      <p>&copy; 2023 [Your Company Name]. All rights reserved.</p>
    </div>
  </div>
</body>
</html>