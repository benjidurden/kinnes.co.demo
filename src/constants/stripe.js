const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_live_SQT4BK0fXRFXZLRa51oUBXpO'
: 'pk_test_W8ELp0NoVyVpoSHKCs81PaxY';

export default STRIPE_PUBLISHABLE;