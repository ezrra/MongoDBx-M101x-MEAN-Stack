Which of the following Mongoose queries will return all product documents that match the string variable search ordered by their text score?

A:
```
Product.
	find({ $text: { $search: search } }).
	sort({ score: { $meta: 'textScore' } }).
	exec(callback);
```

B:
```
Product.
	find({ $text: { $search: search } }).
	sort({ name: -1 }).
	exec(callback);
```

C: 

```
Product.
	find({ $text: { $search: search } },
	{ score: { $meta: 'textScore' } }).
	sort({ score: { $meta: 'textScore' } }).
	exec(callback)
```