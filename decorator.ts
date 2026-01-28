/**
 * The Decorator Pattern is a structural design pattern that allows you to 
 * attach new behaviors to objects by placing them inside special wrapper objects that contain the behaviors.
 * 
 * Easy definition: A decorator is a class that wraps another class and adds new functionality to it.
 */

interface Coffee {
    cost(): number;
    description(): string;
}

/** The concrete base coffee. It is the object that gets wrapped, not a wrapper. */
class SimpleCoffee implements Coffee {
    cost(): number {
        return 10;
    }
    description(): string {
        return 'Simple coffee';
    }
}

/**
 * Base for all decorators. Wraps any Coffee (not just SimpleCoffee) and delegates to it.
 * Concrete decorators extend this so they can wrap any Coffee—including other decorators—and be stacked (e.g. milk on sugar on simple coffee).
 */
class CoffeeDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
    cost(): number {
        return this.coffee.cost();
    }
    description(): string {
        return this.coffee.description();
    }
}

/** Extends CoffeeDecorator (not SimpleCoffee) so it can wrap any Coffee and be composed with other decorators (e.g. milk + sugar). */
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 2;
    }
    description(): string {
        return super.description() + ' with milk';
    }
}

/** Extends CoffeeDecorator (not SimpleCoffee) so it can wrap any Coffee and be composed with other decorators (e.g. sugar + milk). */
class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1;
    }
    description(): string {
        return super.description() + ' with sugar';
    }
}

// Stacked example: simple coffee + sugar + milk (decorators wrap any Coffee, so they can wrap each other)
// const stacked = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));
// stacked.cost()       // 13 (10 + 1 + 2)
// stacked.description() // 'Simple coffee with sugar with milk'

export { SimpleCoffee, CoffeeDecorator, MilkDecorator, SugarDecorator };