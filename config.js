module.exports = {
  salesforce: {
    username: process.env.SF_USERNAME || 'default_username',
    password: process.env.SF_PASSWORD || 'default_password',
    securityToken: process.env.SF_SECURITY_TOKEN || 'default_security_token'
  },
  googleAnalytics: {
    viewId: process.env.GA_VIEW_ID || 'default_view_id',
    credentials: {
      client_email: process.env.GA_CLIENT_EMAIL || 'default_client_email',
      private_key: process.env.GA_PRIVATE_KEY || 'default_private_key'
    }
  },
  slack: {
    webhookUrl: process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/default/webhook/url'
  }
};