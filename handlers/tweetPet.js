'use strict';

module.exports.tweetPet = (event, context, callback) => {
  const TweetPets = require('../lib/tweetPets');

  const tweetPets = new TweetPets({
    consumer_key: process.env.TWIT_API_KEY,
    consumer_secret: process.env.TWIT_API_KEY_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
    timeout_ms: process.env.TWIT_TIMEOUT_MS,
  }, process.env.ADOPT_API_KEY, process.env.SHELTER_ID);

  tweetPets.tweet()
  .then((data) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'We tweeted an adoptable pet! Our bot completed successfully!',
        data: data
      }),
    };

    callback(null, response);
  });
};
