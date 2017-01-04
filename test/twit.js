'use strict';

const assert = require('assert');
const Twit = require('../lib/twit');
const _ = require('lodash');

describe('twit', () => {
  describe('instantiation', () => {
    it('make new Twit', () => {
      const twitterConfig = {
        consumer_key: '123',
        consumer_secret: '123',
        access_token: '123',
        access_token_secret: '123',
        timeout_ms: 60000,
      };
      const twit = new Twit(twitterConfig);

      assert(twit.twit);
      assert(_.isFunction(twit.postStatus));
      assert(_.isFunction(twit.uploadImage));
      assert(_.isFunction(twit.tweet));
    });
  });
});
