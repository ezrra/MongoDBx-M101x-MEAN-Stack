Suppose you have the parent variable as defined in the below code:

```
var parentSchema = new mongoose.Schema({
	children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({
	children: ['000000000000000000000001', '000000000000000000000002']
});
```

How would you use mongoose's populate() function to make the children field contain the 'Child' documents rather than just the Object Ids?

X parent.populate('children', function (error, parent) { /* ... */ });

- parent.populate('children.$', function (error, parent) { /* ... */ });

- Children.find({ _id: { $in: parent.children } });