/**
 * The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, 
 * but allows subclasses to alter the type of objects that will be created.
 * 
 * Easy definition: A factory is an object that creates other objects.
*/

interface Vehicle {
    name: string;
    start(): void;
    stop(): void;
}

/** Concrete vehicle: car. */
class Car implements Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    start(): void {
        console.log(`${this.name} is starting`);
    }
    stop(): void {
        console.log(`${this.name} is stopping`);
    }
}

/** Concrete vehicle: bike. */
class Bike implements Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    start(): void {
        console.log(`${this.name} is starting`);
    }
    stop(): void {
        console.log(`${this.name} is stopping`);
    }
}

/** Creates Vehicle instances (Car or Bike) by type. */
class VehicleFactory {
    createVehicle(type: string, name: string): Vehicle {
        switch (type) {
            case 'car':
                return new Car(name);
            case 'bike':
                return new Bike(name);
            default:
                throw new Error(`Invalid vehicle type: ${type}`);
        }
    }
}

export { VehicleFactory, Car, Bike };