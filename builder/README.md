# Builder Pattern — Product Builder

This folder demonstrates the Builder creational pattern using simple product builders.

Concept
- A Builder class constructs a complex object step-by-step and exposes a `build()` method to return the final product.
- The concrete builders here (`ProductA`, `ProductB`) provide sensible defaults and fluent methods to adjust optional fields like `discount` and `tax`.

Usage

```javascript
import { ProductA, ProductB } from './builder.js';

// create a product with defaults
const productA = new ProductA().build();

// create a product with a discount
const discountedB = new ProductB().setDiscount(10).build();
```

Notes
- The builders encapsulate construction details — call `.build()` to get the final `Product` object.
- If you need a Director or a config-based constructor, consider adding a `ProductDirector` or a single config object to the director API.

