// index.ts
import { CreditCardPayment, PayPalPayment, CryptoPayment, PaymentProcessor } from './strategy/strategy.js';

const processor = new PaymentProcessor(new CreditCardPayment());
console.log(processor.processPayment(100));
processor.setStrategy(new PayPalPayment());
console.log(processor.processPayment(200));
processor.setStrategy(new CryptoPayment());
console.log(processor.processPayment(300));