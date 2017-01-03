'use strict';

const assert = require('assert');
const TweetPets = require('../lib/tweetPets');
const _ = require('lodash');

describe('tweet-pets', () => {
  describe('instantiation', () => {
    it('make new tweetPets', () => {
      const tweetPets = new TweetPets({
        consumer_key: '1234',
        consumer_secret: '1234',
        access_token: 'abcd',
        access_token_secret: 'abcd',
        timeout_ms: 1000,
      }, 'abcd', '12345');

      assert(tweetPets.adoptPet);
      assert(tweetPets.adoptPet.shelterId);
      assert(tweetPets.adoptPet.apiKey);
      assert(tweetPets.twitter);
      assert(tweetPets.twitter.twit);
      assert(_.isFunction(tweetPets.tweet));
      assert(_.isFunction(tweetPets.getRandomPet));
      assert(_.isFunction(tweetPets.generateText));
    });
    it('test generateText', () => {
      const tweetPets = new TweetPets({
        consumer_key: '1234',
        consumer_secret: '1234',
        access_token: 'abcd',
        access_token_secret: 'abcd',
        timeout_ms: 1000,
      }, 'abcd', '12345');

      const testPet = {
         name: 'Cheshire',
         breed: 'Domestic Mediumhair',
         size: 'large',
         sex: 'male',
         url: 'www.test.com',
         species: 'Cat'
      };

      assert(tweetPets.generateText(testPet));
    });

    // integration tests
    it.skip('test tweet pets functions', (next) => {
      const twitterConfig = {
        consumer_key: process.env.TWIT_API_KEY,
        consumer_secret: process.env.TWIT_API_KEY_SECRET,
        access_token: process.env.TWIT_ACCESS_TOKEN,
        access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
        timeout_ms: process.env.TWIT_TIMEOUT_MS,
      };
      const tweetPets = new TweetPets(twitterConfig, process.env.ADOPT_API_KEY, process.env.SHELTER_ID);
      tweetPets.tweet()
      .then((data) => {
        assert(data);
        next();
      });
    });
  });
});
