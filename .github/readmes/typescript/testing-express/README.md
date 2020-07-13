# Testing Express

This example shows how to implement integration tests using [Express](https://expressjs.com/), [Supertest](https://github.com/visionmedia/supertest) and [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md). It is based on a SQLite database, you can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db).

__INLINE(../_setup-1.md)__
cd prisma-examples/typescript/testing-express
__INLINE(../_setup-2.md)__

### 2. Start the REST API server

Rename the `.env.example` to `.env` and execute this command to start the server:

```
npm run dev
```

The server is now running on `http://localhost:3000`. You can send the API requests implemented in `index.js`, e.g. [`http://localhost:3000/feed`](http://localhost:3000/feed).

### 3. Testing the endpoints

The tests are located in the `tests` folder. In these you will find tests handled for cases if a same user is added twice and also to check if the users added are obtained correctly.

The tests can be run using:

```
npm test
```

__INLINE(./_using-the-rest-api.md)__
