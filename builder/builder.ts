/**
 * The Builder Pattern is a creational design pattern that allows you to 
 * construct complex objects step by step.
 * 
 * Easy definition: A builder is a class that constructs other classes.
 */

interface Product {
    name: string;
    price: number;
    description: string;
    discount: number;
    tax: number;
}

/** Builder interface for constructing Product objects. */
interface ProductBuilder {
    setDiscount(discount: number): ProductBuilder;
    setTax(tax: number): ProductBuilder;
    build(): Product;
}

/** Concrete builder for creating ProductA objects. */
class ProductA implements ProductBuilder {
    private product: Product;
    constructor() {
        this.product = { 
            name: 'Product A', 
            price: 100, 
            description: 'My awesome product A', 
            discount: 0, 
            tax: 0 
        };
    }
    setDiscount(discount: number): ProductBuilder {
        this.product.discount = discount;
        return this;
    }
    setTax(tax: number): ProductBuilder {
        this.product.tax = tax;
        return this;
    }
    build(): Product {
        return this.product;
    }
}

/** Concrete builder for creating ProductB objects. */
class ProductB implements ProductBuilder {
    private product: Product;
    constructor() {
        this.product = { 
            name: 'Product B',
            price: 200, 
            description: 'My awesome product B', 
            discount: 0, 
            tax: 0 
        };
    }
    setDiscount(discount: number): ProductBuilder {
        this.product.discount = discount;
        return this;
    }
    setTax(tax: number): ProductBuilder {
        this.product.tax = tax;
        return this;
    }
    build(): Product {
        return this.product;
    }
}

export { ProductA, ProductB };