import { test, expect } from 'vitest';
import { CreditCardPayment, PaymentProcessor } from './strategy.js';

test('PaymentProcessor should process payments with different strategies', () => {
  const processor = new PaymentProcessor(new CreditCardPayment());
  expect(processor.processPayment(100)).toBe('Processing credit card payment of 100');
});

