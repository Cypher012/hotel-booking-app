## Init TypeScript
npx typescript --init

## Install dev dependencies
npm i -D typescript ts-node-dev @types/express @types/config @types/bcrypt pino-pretty  @types/cors  @types/nodemailer @types/lodash @types/jsonwebtoken 

## Install Express
npm i express@5

## Install dependencies
npm i mongoose @typegoose/typegoose config bcrypt pino dayjs nanoid nodemailer lodash jsonwebtoken dotenv zod concurrently rimraf joi cors 


"dev": "ts-node-dev --respawn --clear --transpile-only src/app.ts"

# Authentication REST API with Node.js, TypeScript, Typegoose & Zod

## Features
1. Register a user
2. Verify user's email address
3. Send forgot password email
4. Reset password
5. Get current user
6. Login
7. Access token
8. Refresh tokens

## What technology are we using?
- [TypeScript](https://www.typescriptlang.org/) - Static tye checking 
- [Express@5](https://expressjs.com/en/5x/api.html) - Web server
- [Typegoose](https://typegoose.github.io/typegoose/) - Mongoose wrapper for creating TypeScript interfaces and models
- [argon2](https://github.com/ranisalt/node-argon2#readme) - Password hashing
- [Zod](https://github.com/colinhacks/zod) - Validation
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Signing and verifying JSON web tokens
- [Nodemailer](https://nodemailer.com/about/) - Sending emails
- [Pino](https://github.com/pinojs/pino) - Logging
- [config](https://github.com/lorenwest/node-config) - Managing configuration


## What will you need to follow along?
- [Postman](https://www.postman.com/downloads/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Video structure
1. Demo
2. Code walk-through
3. Bootstrap application
4. User API
    1. Create user
    2. Verify user
    3. Request reset password code
    4. Reset password
    5. Get current user
5. Authentication API
    1. Create user session
    2. Get new access token with refresh tokens

