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

class SimpleCoffee implements Coffee {
    cost(): number {
        return 10;
    }
    description(): string {
        return 'Simple coffee';
    }
}

class CoffeeDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
    cost(): number {
        return this.coffee.cost();
    }
    description(): string {
        return this.coffee.description();
    }
}

class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 2;
    }
    description(): string {
        return super.description() + ' with milk';
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1;
    }
    description(): string {
        return super.description() + ' with sugar';
    }
}

export { SimpleCoffee, CoffeeDecorator, MilkDecorator, SugarDecorator };