export function generateConfirmationEmail(email: string): string {
  const unsubscribeUrl = `${window.location.origin}/unsubscribe?email=${encodeURIComponent(email)}`;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DeFiYield.io Alerts</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .unsubscribe {
      color: #6B7280;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hello,</p>

    <p>Thank you for subscribing to DeFiYield.io alerts!</p>

    <p>You will now receive personalized updates on APY and TVL changes for your favorite liquidity pools.</p>

    <p>If you no longer wish to receive our alerts, you can unsubscribe at any time by clicking the link below:</p>

    <p><a href="${unsubscribeUrl}" class="unsubscribe">Unsubscribe</a></p>

    <p>
      Best regards,<br>
      The DeFiYield.io Team
    </p>
  </div>
</body>
</html>
`;}