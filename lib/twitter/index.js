const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function sendTweet(status) {
  twitterClient.post('statuses/update', { status },  (error, tweet, response) => {
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
}

module.exports = {
  sendTweet,
};
