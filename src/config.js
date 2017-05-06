// @flow
require('dotenv').config();
import createTwitterBot from './helpers/createTwitterBot';

let credentials = {
  consumer_key: process.env.CONSUMER_KEY || '',
  consumer_secret: process.env.CONSUMER_SECRET || '',
  access_token: process.env.ACCESS_TOKEN || '',
  access_token_secret: process.env.ACCESS_TOKEN_SECRET || '',
};

let timeout = 60 * 1000;

let bot = createTwitterBot(credentials, timeout);

export default bot;
