## [Chapter-6: Backend Directory Structure / MVC / Router](https://github.com/Sabbir2809/nodejs-express-mongodb)

1. MVC (Model-View-Controller) is **a pattern in software design commonly used to implement user interfaces (VIEW), data (MODEL), and controlling logic (CONTROLLER)**. It emphasizes a separation between the software's business logic and display.

1. **In Our Project this will be:**

   - **Model** - Database Schema's and Business logics and rules
   - **View** - Server Side Templates (or React front-end)
   - **Controller** - functions attached to routes for modifying request and sending responses. It's a link between the Model and View.

1. **Router:**

   - These are like mini-application on which you can make set of Routes independently.
   - Routers can be attached to main Server App using `server.use(router)`

1. **Arrange Directory in Server like this :**

   - **Controllers** - file containing functions which are attached to each route path
   - **Routes** - files containing routers
   - **Models** : to be discussed in later chapters
   - **Views**: to be discussed in later chapters

---

## [Chapter-5: MongoDB - Server / Mongo Shell (CLI) / Mongo Atlas](https://github.com/Sabbir2809/nodejs-express-mongodb/tree/chapter-6)

MongoDB is **NoSQL** database which has a JSON data storage.

#### Setting up Database Server and Connecting with Mongo Shell:

1. After installing MongoDB community server package on your system - you will have to start the database server using command: This will start MongoDB server on default port 27017. You might have to create a directory for storage in MongoDB - if server asks for storage directory

   ```bash
   mongod
   ```

1. Once server is started - you can use `mongo` client to connect to local server. Now you can use several commands to work with database:

   ```bash
   mongo
   ```

1. This will list all the database in your system:

   ```bash
   show dbs
   ```

1. This will command will let you switch to a particular:

   ```bash
   use <dbname>
   ```

#### Understanding MongoDB structure:

1. Hostname is Database server address - like `localhost` or `db.xy.com`. In mongoDB hostname generally uses mongodb protocol to connect.
   So URLs are generally are of shape : `mongodb://localhost:27017`

1. Database are topmost storage level of your data - mostly each application has 1 database - however complex application might have more than 1 databases. Database is something like `university database`

1. There can be many collections inside a database - collection is a group of documents of similar kind - `students`, `teachers`, `courses` etc

1. Finally document is basic entity of storage in Mongod, it looks very similar to an object in JSON. (However it is BSON)

#### MONGO CLI:

Mongo DB community server comes with in-bulit Mongo CLI which can act as a terminal based client. You can use the CRUD functionality from here

Read the commands [here](https://docs.mongodb.com/manual/reference/mongo-shell/)

#### Task-1:

1. Show database
2. Use database
3. Show collection
4. Create Query (insertOne, insertMany)
5. Read Query (find, findOne)
6. Update Query (updateOne)
7. Delete Query (deleteOne, deleteMany)
8. Delete database (drop)

#### Using MongoDB Node.js Driven

1. To install MONGODB NODE.JS DRIVER use this command

   ```javascript
   npm install mongodb
   ```

1. You can setup database in Node server using following commands :

   ```javascript
   const MongoClient = require('mongodb').MongoClient;
   const assert = require('assert');

   // Connection URL
   const url = 'mongodb://localhost:27017';

   // Database Name
   const dbName = 'myproject';

   // Use connect method to connect to the Server
   MongoClient.connect(url, function (err, client) {
     assert.equal(null, err);
     console.log('Connected correctly to server');

     const db = client.db(dbName);
   });
   ```

Now this `db` handle can be used to perform any CRUD operation using MongoDB NodeJS driver.

#### CRUD Functions links:

1. Create - [Shell Version](https://docs.mongodb.com/manual/crud/#create-operations) / [Node Version](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud#insert-documents)

2. Read - [Shell Version](https://docs.mongodb.com/manual/crud/#read-operations) / [Node Version](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud#findoneandupdate-findoneanddelete-and-findoneandreplace)

3. Update - [Shell Version](https://docs.mongodb.com/manual/crud/#update-operations) / [Node Version](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud#updating-documents)

4. Delete - [Shell Version](https://docs.mongodb.com/manual/crud/#delete-operations) / [Node Version](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud#removing-documents)

#### Mongo Server:

- You can install **MongoDB community server** for your system and set the **Path** to `bin` folder

- You can choose your own database path while starting the **mongod** server

  ```
  mongod --dbpath <path-to-db-directory>
  ```

- **Mongo Compass** : UI Client to see mongo server (local or remote)

- **Mongo Shell** : Command-line based mongo client for checking mongo database.

#### Some Mongo Commands:

**Top Level commands:** (run from anywhere inside the shell)

- show dbs;
- use < database-name > - to choose a database and go inside its prompt

**Database CRUD commands:** (run only from inside a database)

**CREATE COMMANDS:**

- db.< collectionName >.insertOne( _newDocument_ )
- db.< collectionName >.insertMany( _documentArray_ )

**READ COMMANDS:**

- db.< collectionName >.**find**( _filterObject_ ) - to read all docs
- db.< collectionName >.**findOne**( _filterObject_ ) - to read one document
- db.< collectionName >.**countDocuments**( _filterObject_ ) - shows total number of documents.

- **filter** Object : _{ fieldName : {operator: value}}_
  fieldName : database fields name
- **operator** : $eq = equal , $gt= greater than, $lt : less than, $gte = greater than equal, $and and $or operator
- **value** : what value we are comparing with operator.

- e.g { age : {$gt:5}}. - **age** is **greater than** value **5**

- **Cursor functions :**
  These are applied to find() query .

  - **sort**( {fieldName: 1}) : 1 for ascending -1 for descending
  - **limit**( x ) : only gives x documents

**UPDATE COMMANDS:**

- db.< collectionName >.**updateOne**( _filterObject_, _updateObject_, options )

  - update Objects = _{ $set : {field: value}}_
  - options : _{upsert: true}_

- **Upsert** : Update + Insert, when we want a new info to create a new obejcts if no existing object matches filter queries.

- db.< collectionName >.**replaceOne**( _filterObject_, _updateObject_ )
  Overwrites other fields also which are not in updateObject.

**DELETE COMMANDS:**

- db.< collectionName >.**deleteOne**( _filterObject_ )

**Projection**

- Only return selected fields while returning result documents.
- db.< collectionName >.find( _filterObject_, projectionObject )
  e.g. {name:1, age:1, id:0} - only show **name** and **age** and don't show **id**

**MONGO ATLAS CLOUD SETUP:**

**Enviroment Variable** : To use environment variable we can use a npm package called **dotenv** which will create new **process.env** variables.

- Install `dotenv` using `npm install dotenv`
- just have use `.env` file in your root directory
- and call `require('dotenv').config()`
