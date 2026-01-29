import { test, expect } from 'vitest';
import { ProductA, ProductB } from './builder.js';

test('ProductA should create a product', () => {
  const productA = new ProductA().build();
  expect(productA.name).toBe('Product A');
  expect(productA.price).toBe(100);
  expect(productA.description).toBe('My awesome product A');
  expect(productA.discount).toBe(0);
  expect(productA.tax).toBe(0);
});

test('ProductB should create a product', () => {
  const productB = new ProductB().build();
  expect(productB.name).toBe('Product B');
  expect(productB.price).toBe(200);
  expect(productB.description).toBe('My awesome product B');
  expect(productB.discount).toBe(0);
  expect(productB.tax).toBe(0);
});

test('ProductA should create a product in promotion', () => {
  const productA = new ProductA();
  const productInPromotion = productA.setDiscount(10).build();
  expect(productInPromotion.name).toBe('Product A');
  expect(productInPromotion.price).toBe(100);
  expect(productInPromotion.description).toBe('My awesome product A');
  expect(productInPromotion.discount).toBe(10);
});

test('ProductB should create a product in promotion', () => {
  const productB = new ProductB();
  const productInPromotion = productB.setDiscount(10).build();
  expect(productInPromotion.name).toBe('Product B');
  expect(productInPromotion.price).toBe(200);
  expect(productInPromotion.description).toBe('My awesome product B');
  expect(productInPromotion.discount).toBe(10);
});
