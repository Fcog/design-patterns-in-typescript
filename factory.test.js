import { test, expect } from 'vitest';
import { VehicleFactory, Car, Bike } from './factory.js';

test('VehicleFactory should create vehicles', () => {
  const factory = new VehicleFactory();
  const car = factory.createVehicle('car', 'Toyota');
  expect(car).toBeInstanceOf(Car);
  car.start();
  car.stop();
  const bike = factory.createVehicle('bike', 'Specialized');
  expect(bike).toBeInstanceOf(Bike);
  bike.start();
  bike.stop();
});
