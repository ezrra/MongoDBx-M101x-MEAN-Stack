### Multiple Choice

(1 punto posible)
Assuming that db is a MongoDB database handle, which of the following node.js code examples will print all documents in the collection named "movies" where the key "director" is equal to "George Lucas"?

- A
```
db.collection('movies').find({ director: 'George Lucas' }, function(error, docs) {
  console.log(docs);
});
```

X - B 
```
db.collection('movies').find({ director: 'George Lucas' }).toArray(function(error, docs) {
  console.log(docs);
});
```


- C
```
console.log(db.collection('movies').find({ director: 'George Lucas' }));
```

- D
```
console.log(db.collection('movies').find({ director: 'George Lucas' }).toArray());
```