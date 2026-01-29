# Decorator Pattern (decorator.ts)

Simple explanation:

- The Decorator pattern lets you add behavior to objects at runtime by wrapping them with "decorator" objects.
- In this folder the core object is `SimpleCoffee`. Decorators extend `CoffeeDecorator` and hold any `Coffee`.
- Because decorators accept any `Coffee`, you can stack them: decorators can wrap concrete objects or other decorators.

How the code maps to the pattern:

- `SimpleCoffee` — concrete component (the object being decorated).
- `CoffeeDecorator` — base wrapper that delegates to a `Coffee`.
- `MilkDecorator`, `SugarDecorator` — concrete decorators that add cost and text to the description.

Usage example:

```js
import { SimpleCoffee, MilkDecorator, SugarDecorator } from './decorator.js';

// Stack decorators: sugar then milk
const coffee = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));
console.log(coffee.cost());        // 13 (10 + 1 + 2)
console.log(coffee.description()); // "Simple coffee with sugar with milk"
```

