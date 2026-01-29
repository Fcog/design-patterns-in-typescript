# Factory Pattern (factory.ts)

Simple explanation:

- The Factory pattern centralizes object creation behind a single factory method so callers don't need to know concrete classes.
- In this folder `VehicleFactory` decides which `Vehicle` (e.g., `Car` or `Bike`) to create based on input.

How the code maps to the pattern:

- `Vehicle` — the product interface (what clients use).
- `Car`, `Bike` — concrete products.
- `VehicleFactory` — factory that creates `Car` or `Bike` instances based on a `type` string.

Usage example:

```js
import { VehicleFactory } from './factory.js';

const factory = new VehicleFactory();
const car = factory.createVehicle('car', 'Toyota');
car.start(); // "Toyota is starting"
```

