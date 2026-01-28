import { test, expect } from 'vitest';
import {
  SimpleCoffee,
  CoffeeDecorator,
  MilkDecorator,
  SugarDecorator,
} from './decorator.js';

test('SimpleCoffee should return the cost and description of a simple coffee', () => {
  const simpleCoffee = new SimpleCoffee();
  expect(simpleCoffee.cost()).toBe(10);
  expect(simpleCoffee.description()).toBe('Simple coffee');
});

test('CoffeeDecorator should return the cost and description of a coffee with a decorator', () => {
  const simpleCoffee = new SimpleCoffee();
  const coffeeDecorator = new CoffeeDecorator(simpleCoffee);
  expect(coffeeDecorator.cost()).toBe(10);
  expect(coffeeDecorator.description()).toBe('Simple coffee');
});

test('MilkDecorator should return the cost and description of a coffee with a milk decorator', () => {
  const simpleCoffee = new SimpleCoffee();
  const milkDecorator = new MilkDecorator(simpleCoffee);
  expect(milkDecorator.cost()).toBe(12);
  expect(milkDecorator.description()).toBe('Simple coffee with milk');
});

test('SugarDecorator should return the cost and description of a coffee with a sugar decorator', () => {
  const simpleCoffee = new SimpleCoffee();
  const sugarDecorator = new SugarDecorator(simpleCoffee);
  expect(sugarDecorator.cost()).toBe(11);
  expect(sugarDecorator.description()).toBe('Simple coffee with sugar');
});

test('stacked decorators: coffee with milk and sugar (MilkDecorator wraps SugarDecorator wraps SimpleCoffee)', () => {
  const coffeeWithMilkAndSugar = new MilkDecorator(
    new SugarDecorator(new SimpleCoffee())
  );
  expect(coffeeWithMilkAndSugar.cost()).toBe(13); // 10 + 1 (sugar) + 2 (milk)
  expect(coffeeWithMilkAndSugar.description()).toBe(
    'Simple coffee with sugar with milk'
  );
});
