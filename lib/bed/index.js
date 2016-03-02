const moment = require('moment');
const twitter = require('../twitter');

var lastTweet = null;

const inBedStatus = 'In';
const outOfBedStatus = 'Out';

function updateStatus() {
  const now = moment();

  // Check the time difference between now and the previous tweet
  if (lastTweet) {
    const hoursPassed = now.diff(lastTweet.timestamp, 'hours');
    if (hoursPassed < 1) {
      // Don't update status again, might have accidentally pressed the button a few times
      return;
    } else if (hoursPassed < 12) {
      // Tweet the opposite status
      lastTweet = {
        status: lastTweet.status === inBedStatus ? outOfBedStatus : inBedStatus,
        timestamp: now,
      };
      twitter.sendTweet(lastTweet.status);
      return;
    }
  }

  // Check the current time
  const hour = now.get('hour');
  if (hour > 20 || hour < 4) {
    lastTweet = {
      status: inBedStatus,
      timestamp: now,
    };
  } else {
    lastTweet = {
      status: outOfBedStatus,
      timestamp: now,
    };    
  }

  twitter.sendTweet(lastTweet.status);
}

module.exports = {
  updateStatus,
}