## Overview of retail application

## Introduction to mongoose

The most popular object document mapper.
Mongoose provides features like schema validation, pseudo joins, and numerois other features on top of the MongoDB Node.js driver.

Mongoose's API consists of four primary data types.
- SCHEMA: A schema is a set of rules that defines what fields a document may have and what properties the document must satisfy to be considered valid.

- CONNECTION: A connection is an object representing one or more sockets that are connected to the MongoDB server.

- MODEL: At a high level, a model is a combination of a schema and a connection. A model is a wrapper around a single MongoDB collection and uses its associated schema to make sure documents inserted into the collection satisfy the schema's constraints.

- DOCUMENT: Mongoose document can be thougth of as an instantiation of a model. A document is a single object from a collection.


## Schema design principle: store what you query for

PROS
- Fast in-place updates
- Fast queries

CONS
- No joins

You would have to pre-compute the average review score and store in the User Docments if you want to sort by it.

Store What You Query For.


## Schema design principle: principle of least cardinality
This principle provides you a guideline for how to resolve one to many and many to many relationships with MongoDB.

Example: Suppose you were to design a MongoDB schema for a site like meetup.com, where users register for events with a capped number of attendees. In SQL the schema design would be easy. You would have a mapping table for users and events. This table would store rows that contain a user ID and an event ID.

USERS

{
	name: "John"
},
{
	name: "Jack"
}

EVENTS

{
	name: 'Meetup1',
	attendees: []
},
{
	name: "Meetup2",
	attendees: []
}

## MongoDB indexes

Indexes are essentially  a way for MongoDB to pre-compute the results of a query.

## Retail application schema: product

## Retail application schema: category

## Retail application schema: user and cart

## Advanced mongoose features: virtuals
Mongoose has numerous handy features that make it an indispensable tool for web development to Node.js.

Virtuals are one such feature. Virtual are properties that are typically computed from other properties. They are not persisted to the database, but the can be accessed just like any other property. Displaying the price of a product is a good example of where virtuals shine.  Displaying a price as, say 25USD is not a very good choice for user experience.

## Advanced mongoose features: custom setters + sorting by currency

The Mongoose feature that will enable you to do this is custom setters. With custom setters you can tell Mongoose to perform certain operations every time the value of a certain field is set.

In this case, this function updates the internal approximatePriceUSD property to reflect the changes in the proce dot amount. The way your schema computes the internal approximatePriceUSD field is by taking the provided proce and dividing it by exchange rate defined by this fx function.