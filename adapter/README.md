# Adapter Pattern (adapter.ts)

Simple explanation:

- The Adapter pattern converts one interface to another so incompatible classes can work together.
- In this folder `OldPaymentProcessor` is the legacy API and `NewPaymentProcessor` is the new API clients expect.
- `PaymentAdapter` wraps an `OldPaymentProcessor` and exposes the `NewPaymentProcessor` methods.

How the code maps to the pattern:

- `OldPaymentProcessor` — existing/legacy implementation with an older interface.
- `NewPaymentProcessor` — target interface expected by clients.
- `PaymentAdapter` — adapter that implements `NewPaymentProcessor` and delegates calls to `OldPaymentProcessor`.

Usage example:

```js
import { OldPaymentProcessor, PaymentAdapter } from './adapter.js';

const oldProc = new OldPaymentProcessor();
const adapter = new PaymentAdapter(oldProc);
console.log(adapter.process(100));    // Uses oldProc.processPayment under the hood
console.log(adapter.getTransId());    // Adapts getTransactionId -> getTransId
```

