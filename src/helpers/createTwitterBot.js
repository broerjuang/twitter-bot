// @flow
import Twit from 'twit';

type Credentials = {
  consumer_key: string;
  consumer_secret: string;
  access_token: string;
  access_token_secret: string;
};

type Timeout = number;

type Bot = {
  get: (route: string, finder: {[key: string]: mixed}, callback: Function) => void;
  post: (route: string, finder: {[key: string]: mixed}, callback: Function) => void;
};

function createTwitterBot(credentials: Credentials, timeout: Timeout): Bot {
  return new Twit({
    ...credentials,
    timeout_ms: timeout,
  });
}

export default createTwitterBot;
