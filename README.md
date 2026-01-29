# Design Patterns in TypeScript

A small TypeScript project demonstrating four classic design patterns with runnable examples and tests.

## Patterns

| Pattern       | Type       | Example                                                                                                                     |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Adapter**   | Structural | `PaymentAdapter` — adapts `OldPaymentProcessor` to the `NewPaymentProcessor` interface so both can be used interchangeably. |
| **Decorator** | Structural | Coffee — `SimpleCoffee` wrapped by `MilkDecorator` and `SugarDecorator` to add cost and description.                        |
| **Factory**   | Creational | `VehicleFactory` — creates `Car` or `Bike` instances based on a type string.                                                |
| **Builder**   | Creational | `ProductA` / `ProductB` — builders that construct `Product` objects step-by-step (see `builder/README.md`).                 |
| **Strategy**  | Behavioral | `PaymentProcessor` — switches between `CreditCardPayment`, `PayPalPayment`, and `CryptoPayment` at runtime.                 |

## Setup

```bash
npm install
```

## Scripts

- **`npm run build`** / **`npm run type-check`** — TypeScript type check
- **`npm run lint`** — ESLint
- **`npm run test`** — Vitest
- **`npm run check-all`** — type-check + lint + format check

## Structure

- `adapter.ts` — Adapter pattern (payment processors)
- `decorator.ts` — Decorator pattern (coffee)
- `factory.ts` — Factory pattern (vehicles)
- `strategy.ts` — Strategy pattern (payments)
 - `builder/` — Builder pattern (product builders and tests)
   - `builder.ts` — concrete builders (`ProductA`, `ProductB`)
   - `builder.test.js` — tests for builder examples

Each pattern has a corresponding `*.test.js` file.
