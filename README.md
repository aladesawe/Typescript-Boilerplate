# Getting Started

A boilerplate for Express backend server in TypeScript. These instructions sets up the project on your local machine for development and testing.

## Prerequisites

You need `node@^12` and `npm@^6` installed on your system.

## Installing dependencies

A step by step series of examples that tell you how to get a development environment running.

Install all project dependency with `npm`:
```shell script
npm install
```

Then you need to create a `.env` file with some required variables:
```shell script
PORT=3000
NODE_ENV=development
```
The default value of `PORT` is set to 3000.

Now, you can start the application with the predefined scripts:
```shell script
npm run dev
# OR
npm run start
```

## Running tests

The unit tests can also be run from a predefined script:
```shell script
npm run test
```

## Style/Code-Quality

There are pre-commit hooks to run `eslint` and `prettier` on staged files.
There is a pre-push hook that runs the unit tests.
The configuration for this is present inside the `package.json` file.


## Acknowledgments

Inspiration from [express-boilerplate](https://github.com/skb1129/express-boilerplate).