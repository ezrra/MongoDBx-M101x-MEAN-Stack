### In order to find all documents in the 'movies' collection for which the 'leadActor' key equals "Arnold Schwarzenegger", which of the following commands would you execute in the mongo shell?

- db.exec('SELECT * FROM movies WHERE leadActor="Arnold Schwarzenegger"')
X db.movies.find({ leadActor: 'Arnold Schwarzenegger' })
- db.movies.insert({ leadActor: 'Arnold Schwarzenegger' })
- db.sample.find({ leadActor: 'Arnold Schwarzenegger' })