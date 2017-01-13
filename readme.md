# BuildingConnected On-site: Backend Files Challenge
Welcome, we're glad you've joined us today!

## Environment Setup
To get your basic environment up and running, we assume you've already:

1. Cloned this repo, made a copy, and pushed up to a new public github repo.
2. Have node installed locally
3. Have Docker installed
4. Obtained AWS Credentials from someone on the team
5. Installed Node v6

Start Mongo via Docker:
```
$ docker-compose up
```
Start the App:
```
$ npm i
$ ACCESS_KEY_ID="<...>" SECRET_ACCESS_KEY="<...>" npm start
```
Browse to [http://localhost:8080](http://localhost:8080)

Backend code changes will immediately restart your server thanks to Nodemon. Front-end changes will require a browser refresh.

## Server Code Organization
This repo attempts to simulate some of the coding patterns we use in production today.  We do not make use of any framework in our primary BC server repo.  Instead, our patterns _loosely_ follow  Domain Driven Design as well as [CQRS](https://martinfowler.com/bliki/CQRS.html) (Command Query Responsibility Separation).  This has benefited us in two main ways:
1. All code pertaining to a given domain is kept under a single parent folder.
2. By separating commands (mutations) and queries, it gives us a ton of flexibility when it comes to how and where we persist our data.

Checkout the [`server/project/`](./server/project) folder for a decent example of how we like to structure things.

## The Primary Challenge
First and foremost, we have a frontend that needs some API routes built out for us!  You'll notice that we've already scaffolded out the ability to create and list projects as an
example for you.  Next, you'll need to wire up routes to power the following UI features:
* List all items at the root of a project.
* Create a folder at the root of a project.
* Upload a file at the root of a project.
* List all items within a folder.
* Create a folder within a folder.
* Upload a file within a folder.

In order to get a functional UI up and running for you, we went ahead and agreed on some basic [API documentation](./server) already.  By the way, we assume you'll want to store uploaded files on S3.  That can be a bit of a pain to setup, so we've already got the basics of that up and running for you as well.  You'll still need to persist meta data about the file in Mongo, however.

## Secondary Challenges
Assuming you have some time left over, there are a few additional challenges you can pick up.  Your choice which one(s) you'd like to tackle and in what order:

1. Notice in the UI there is a `Size` column.  It's pretty easy to get that number when you upload a file, but have you thought about how/when to determine the size for folders?  Take a stab at keeping folder size numbers up to date!
2. We haven't talked about the elephant in the room yet... that `Download All` button in the top left hand corner.  Can you wire up some magic that will allow someone to download all of the files and folders in a project all at once (and efficiently)?
3. Logging is oh so important in production systems.  Can you elegantly persist the following data on every request: `Request Method`, `Requst Path`, `Execution Time`, `Change in Memory Consumption`.

## As you begin...
A few things to keep in mind that our team generally values when we do our own day-to-day work:
* Quality over quantity.
* Over-communication.
* Code readability and maintainability.
* Most important: Always remember that a great customer experience is all that matters.

Good luck!
