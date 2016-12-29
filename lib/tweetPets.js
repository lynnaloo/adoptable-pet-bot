'use strict';

const AdoptPet = require('adopt-a-pet');
const Twitter = require('./twit');

class TweetPets {
  constructor(twitterConfig, adoptPetApi, shelterId) {
    this.adoptPet = new AdoptPet(shelterId, adoptPetApi);
    this.twitter = new Twitter(twitterConfig);
  }

  tweetPet() {
    this.adoptPet.getRandomPet()
    .then((randomPet) => {
      const name = randomPet.name;
      const sex = randomPet.sex;
      const breed = randomPet.breed;
      const url = randomPet.url;
      //const imageUrl = randomPet.imageUrl;
      //const imageWidth = randomPet.imageWidth;
      //const imageHeight = randomPet.imageHeight;

      const text = `This is ${name}, a ${sex} ${breed} ${url}`;
      return this.twitter.tweet(text, null);
    })
    .then((data) => {
      console.log('Tweet sent successfully', data);
      return data;
    });
  }
}

module.exports = TweetPets;
