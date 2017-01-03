# Adoptable Pet Bot

Uses AWS Lambda and Serverless Framework to Tweet Random Adoptable Pets from Adopt-a-Pet.

Inspired by work on [Cute Pets Norfolk](https://github.com/Code4HR/CutiesInHamptonRoads).

## Setup

-   Install Node 4.
-   Clone this repository and install modules:
```
git clone https://github.com/lynnaloo/adoptable-pet-bot.git
npm i -g serverless
npm i

```
-   To run `serverless` commands with your AWS account, you will need to [setup your AWS account credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials) on your machine.
-   Create a `env.json` file or rename `same_env.json` and enter credentials. Note
that you need Twitter and Adopt-a-Pet API keys to use this bot.
-   `serverless deploy` or invoke the serverless function locally:
```
serverless invoke local -l -f tweetPet
```
