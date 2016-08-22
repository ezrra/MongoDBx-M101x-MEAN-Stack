Suppose you had a schema that tracked the history of price changes that looked like this:

```
var schema = new mongoose.Schema({
	priceHistory: [Number],
	price: { type: Number, setL handlePriceChange }
})
```

Which of the following implementations of the handlePriceChange function would push any changes in the price field to the end of the priceHistory array?

X A:
```
function handlePrice (v) {
	if (v !== this.price) {
		this.priceHistory.push(v);
	}

	return v;
}
```

B:
```
function handlePriceChange (v) {
	v.priceHistory.push(v);
	return v;
}
```

C:
```
function handlePriceChange () {
	this.priceHistory.push(v)
}
```
