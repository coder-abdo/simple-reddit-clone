# Simple Reddit Clone

## Description

This a simple reddit clone backend that you can create post, get all posts, get post by its ID, update Post, delete Post, create comments to the post, update comments to the post, and delete comments to the posst.

### Author

Abdelmonaem Shahat a junior Full Stack.

### Techs:

1. TypeORM (handling database).
2. Express JS (handling the requests).
3. Typescript (type safing).
4. Middlewares such as (cors, morgan, dotenv, & helemt).

### Steps to run this project:

1. Run `npm i` command or `yarn`.
2. Setup database settings inside `data-source.ts` file.

- create `.env` file contains these variables:

```
PORT=4000
NODE_ENV=dev
PGHOST='localhost'
PGUSER='postgres'
PGDATABASE='reddit'
PGPASSWORD='test'
PGPORT=5432
```

3. Run `npm start` or `yarn start` command.
