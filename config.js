module.exports = {
  salesforce: {
    username: process.env.SF_USERNAME || 'your_username',
    password: process.env.SF_PASSWORD || 'your_password',
    securityToken: process.env.SF_SECURITY_TOKEN || 'your_security_token'
  },
  googleAnalytics: {
    viewId: process.env.GA_VIEW_ID || 'your_view_id',
    credentials: {
      client_email: process.env.GA_CLIENT_EMAIL || 'your_client_email',
      private_key: process.env.GA_PRIVATE_KEY || 'your_private_key'
    }
  },
  slack: {
    webhookUrl: process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/your/webhook/url'
  }
};