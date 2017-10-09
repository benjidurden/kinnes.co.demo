const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_Kyv5aR0J69QDKr7PZN98YaFz'
    : 'sk_test_CVqGvk7GpxGCAbRQdokWZxym';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;