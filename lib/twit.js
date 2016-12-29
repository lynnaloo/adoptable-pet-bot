'use strict';

const Twit = require('twit');

class Twitter {
  constructor(config) {
    this.twit = new Twit(config);
  }

  tweet(text, image) {
    return new Promise((resolve, reject) => {
      this.twit.post('statuses/update', { status: text }, (err, data, response) => {
        if (err) {
          return reject(new Error(err));
        }
        console.log(data);
        console.log(response);
        return resolve(data);
      });
    });
  }
}

module.exports = Twitter;
