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
         sex: 'Male',
         url: 'www.test.com',
         species: 'Cat',
         imageUrl: 'https://s3.amazonaws.com/pet-uploads.adoptapet.com/8/a/0/240800556.jpg'
      };

      assert(tweetPets.generateText(testPet));
    });
  });
});
