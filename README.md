## Twitter Bot Made Easy

This is a personal project to create twitter bot by layering [twit](https://github.com/ttezel/twit) using promise based callback and flow type definition.


### Example usage
```javascript
// Example

getAllFollowers(`broerjuang`)
  .then(({users}) => users)
  .then((followers) => followers.map((user) => user.screen_name))
  .then(console.log);

// it will give us the list of all follower.screen_name;
```
