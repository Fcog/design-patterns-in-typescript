# Strategy Pattern (strategy.ts)

Simple explanation:

- The Strategy pattern encapsulates interchangeable algorithms (strategies) behind a common interface so you can swap them at runtime.
- In this folder different payment algorithms are implemented as separate classes implementing `PaymentStrategy`.
- `PaymentProcessor` is the context that uses a `PaymentStrategy` and can change it with `setStrategy`.

How the code maps to the pattern:

- `PaymentStrategy` — strategy interface.
- `CreditCardPayment`, `PayPalPayment`, `CryptoPayment` — concrete strategies.
- `PaymentProcessor` — context that delegates payment processing to the current strategy.

Usage example:

```js
import { CreditCardPayment, PayPalPayment, PaymentProcessor } from './strategy.js';

const processor = new PaymentProcessor(new CreditCardPayment());
console.log(processor.processPayment(100)); // credit card
processor.setStrategy(new PayPalPayment());
console.log(processor.processPayment(200)); // PayPal
```

