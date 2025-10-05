export const KIT_CONFIG = {
  // Replace these with your actual Kit.com credentials
  FORM_ID: 'YOUR_KIT_FORM_ID_HERE', // Get this from your Kit.com form settings
  API_KEY: 'YOUR_KIT_API_KEY_HERE', // Optional: for advanced API usage
  
  // Kit.com endpoints
  SUBSCRIBE_URL: 'https://kit.com/forms/',
  API_BASE_URL: 'https://api.kit.com/v3',
  
  // Default tags for blog subscribers
  DEFAULT_TAGS: ['blog-subscriber', 'portfolio-visitor', 'developer'],
  
  // Form configuration
  FORM_CONFIG: {
    redirect_url: typeof window !== 'undefined' ? window.location.origin + '/thank-you' : '/thank-you', // Optional: custom thank you page
    double_optin: true, // Require email confirmation
    tags: ['blog', 'newsletter', 'dotnet-developer']
  }
};

// Instructions for setting up Kit.com integration:
/*
1. Sign up for Kit.com (formerly ConvertKit) at https://builtwith.kit.com
2. Create a new form in your Kit dashboard
3. Copy the form ID from the form settings
4. Replace 'YOUR_KIT_FORM_ID_HERE' with your actual form ID
5. Optionally, get your API key for advanced features
6. Customize the tags and configuration as needed

Example form ID: "123456789"
Example API key: "your_api_key_here"

For more information, visit:
- Kit API docs: https://developers.kit.com/
- Form integration: https://help.kit.com/en/articles/2502554-the-kit-api
*/