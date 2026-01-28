import { test, expect } from 'vitest';
import {
  CreditCardPayment,
  PayPalPayment,
  CryptoPayment,
  PaymentProcessor,
} from './strategy.js';

test('PaymentProcessor should process payments using different strategies', () => {
  const processor = new PaymentProcessor(new CreditCardPayment());
  expect(processor.processPayment(100)).toBe(
    'Processing credit card payment of 100'
  );
  processor.setStrategy(new PayPalPayment());
  expect(processor.processPayment(200)).toBe(
    'Processing PayPal payment of 200'
  );
  processor.setStrategy(new CryptoPayment());
  expect(processor.processPayment(300)).toBe(
    'Processing crypto payment of 300'
  );
});
