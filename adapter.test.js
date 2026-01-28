import { test, expect } from 'vitest';
import { OldPaymentProcessor, PaymentAdapter } from './adapter.js';

test('PaymentAdapter should process payments using the old payment processor', () => {
  const oldPaymentProcessor = new OldPaymentProcessor();
  const oldPaymentProcessorWithAdapter = new PaymentAdapter(
    oldPaymentProcessor
  );
  expect(oldPaymentProcessorWithAdapter.process(100)).toBe(
    'Processing payment of 100'
  );
  expect(oldPaymentProcessorWithAdapter.getTransId()).toBe('1234567890');
  expect(oldPaymentProcessorWithAdapter.getPayStatus()).toBe(
    'success from old payment processor'
  );
});
