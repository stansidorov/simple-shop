## simple-shop
 A node.js practice project that creates a simple shop api. Based on this [course](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&ab_channel=Academind)

## Setup
- Create an account in (MongoDb Atlas)[https://www.mongodb.com/cloud/atlas] and add a database
- Set `dburi` in `app.js` for the database. Make sure to leave `process.env.MONGO_ATLAS_PW` as it dymanically populates a password for database
- Set the password for the database in `nodemon.json` for the key `MONGO_ATLAS_PW`

## Features
- Runs on a `localhost`. Port is set to `3000` if environment variable is not provided
- Provides 3 endpoints `products`, `orders` and `user`
- User authentication is implemented

## npm packages
- [bcrypt](https://www.npmjs.com/package/bcryptexpress) (password hashing)
- [body-parser](https://www.npmjs.com/package/body-parser) (body parsing middleware)
- [express](https://expressjs.com/) (web framework)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT)
- [mongoose](https://mongoosejs.com/) (ODM library for MongoDB)
- [morgan](https://www.npmjs.com/package/morgan) (logger middleware)
- [multer](https://www.npmjs.com/package/multer) (`multipart/form-data` middleware)
- [nodemon](https://www.npmjs.com/package/nodemon) (app auto restarting tool)
