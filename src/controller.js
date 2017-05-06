// @flow

import bot from './config';
import type {User} from './types/User';
import type {Timeline} from './types/TimeLine';
import type {Status} from './types/Status';

type Result = {
  users: Array<User>;
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
};

function getAllFollowers(username: string): Promise<Result> {
  return new Promise((resolve, reject) => {
    bot.get(`followers/list`, {screen_name: username}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function getFollowings(username: string): Promise<Result> {
  return new Promise((resolve, reject) => {
    bot.get(`friends/list`, {screen_name: username}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function getHomeTimeLine(howMuch: number): Promise<Array<Timeline>> {
  return new Promise((resolve, reject) => {
    bot.get(`statuses/home_timeline`, {count: howMuch}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function doRetweet(tweetId: string): Promise<Status> {
  return new Promise((resolve, reject) => {
    bot.post(`statuses/retweet/:id`, {id: tweetId}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function unRetweet(tweetId: string): Promise<Status> {
  return new Promise((resolve, reject) => {
    bot.post(`statuses/unretweet/:id`, {id: tweetId}, (error, status) => {
      if (error) {
        reject(error);
      } else {
        resolve(status);
      }
    });
  });
}

function doLikeTweet(tweetId: string): Promise<*> {
  return new Promise((resolve, reject) => {
    bot.post(`favorites/create`, {id: tweetId}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function unlikeTweet(tweetId: string): Promise<*> {
  return new Promise((resolve, reject) => {
    bot.post(`favorites/destroy`, {id: tweetId}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

export {
  getAllFollowers,
  getFollowings,
  getHomeTimeLine,
  doRetweet,
  unRetweet,
  doLikeTweet,
  unlikeTweet,
};
