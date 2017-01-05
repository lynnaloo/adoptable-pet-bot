'use strict';

const AdoptPet = require('adopt-a-pet');
const Twitter = require('./twit');
const _ = require('lodash');

class TweetPets {
  constructor(twitterConfig, adoptPetApi, shelterId) {
    this.adoptPet = new AdoptPet(shelterId, adoptPetApi);
    this.twitter = new Twitter(twitterConfig);
  }

  getRandomPet() {
    return this.adoptPet.getRandomPet()
    .then((randomPet) => {
      console.log('Pet:', randomPet);
      return randomPet;
    });
  }

  generateText(pet) {
    const name = pet.name;
    const sex = pet.sex || '\b';
    const breed = pet.breed || '\b';
    const url = pet.url;
    const species = pet.species || '\b';
    const shelter = process.env.SHELTER_NAME || pet.shelter;
    const hashtags = [pet.breed, pet.species, shelter];

    // create string of hashtags for tweet
    const hashString = _.map(hashtags, (tag) => {
      // sanitize hashtags and add # symbol
      return tag ? `#${(tag || '').replace(/[^A-Z0-9]/ig, '')}` : '';
    })
    .join(' ');

    // join string values together to form tweet text
    const tweetText =  `Hi! I'm ${name}, a ${sex} ${breed} ${species}. ${hashString}
      ${url}`;

    console.log(`Proposed tweet: ${tweetText}`);
    return tweetText;
  }

  tweet() {
    console.log('Preparing to tweet');
    return this.getRandomPet()
    .then((pet) => {
      const text = this.generateText(pet);
      return this.twitter.tweet(text, pet.imageUrl);
    })
    .then((data) => {
      console.log('Tweet sent successfully');
      return data;
    });
  }
}

module.exports = TweetPets;
