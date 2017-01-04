'use strict';

const AdoptPet = require('adopt-a-pet');
const Twitter = require('./twit');

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
    const sex = pet.sex;
    const breed = pet.breed;
    const url = pet.url;
    const species = pet.species;

    let text = `This is ${name}, a `;
    if (sex) {
      text += `${sex} `;
    }
    text += `${breed} ${species}. ${url}`;
    console.log(`Proposed tweet: ${text}`);
    return text;
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
