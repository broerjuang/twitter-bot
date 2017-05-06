// @flow
import {
  getAllFollowers,
  getFollowings,
  getHomeTimeLine,
  doRetweet,
  unRetweet,
  doLikeTweet,
  unlikeTweet,
} from './controller';


// Example

getAllFollowers(`broerjuang`)
  .then(({users}) => users)
  .then((followers) => followers.map((user) => user.screen_name))
  .then(console.log);

// it will give us the list of all follower.screen_name;
