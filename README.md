
# CRUD Application using NodeJS and MongoDB

This repository contains the CRUD (Create, Read, Update, Delete) operations performed in NodeJS and MongoDB. Following are the parts of this CRUD application.

- Controller which is the set of functions used to contol which information is accessed by the user.
- Configuration provides connectDb function to connect with MongoDB using `MONGO_URI`
- StudentModel is the blueprint of an object on which CRUD operations will be performed.
- `server.js` file serves as the entry point of NodeJS application.
- Routes file contains all the routes which will be used to request Student object from [postman](https://postman.com/) API.


- Read about [Async/await](https://javascript.info/async-await)  and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 