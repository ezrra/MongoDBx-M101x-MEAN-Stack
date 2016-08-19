Given this product schema, which of the below operations would cause a valid product to become invalid?

```
var mongoose = require('mongoose');
var Category = require('./category');

module.exports = new mongoose.Schema({
	
	name: { type: String, required: true },
	// Pictures must start with "http://"
	pictures: [{ type: String, match: /^http:\/\// }],
	price: {
		amount: { type: Number, required: true },
		// Only 3 supported currencies for now
		currency: {
			type: String,
			emun: ['USD', 'EUR', 'GBP'],
			required: true
		}
	},
	category: Category.categorySchema
});
```
- product.pictures.push('http://www.google.com');

X product.price.currency = 'CAD';

- product.price.amount = 1;

- product.name = 'bacon';