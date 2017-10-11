const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'https://kinnes-co-backend.herokuapp.com/'
//Heroku link
: 'http://localhost:8080';

export default PAYMENT_SERVER_URL;