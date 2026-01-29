/**
 * The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, 
 * put each of them in a separate class, and make their objects interchangeable.
 * 
 * Easy definition: A strategy is a class that implements a behavior.
 */

interface PaymentStrategy {
    process(amount: number): string;
}

/** Payment strategy: credit card. */
class CreditCardPayment implements PaymentStrategy {
    process(amount: number): string {
        return `Processing credit card payment of ${amount}`;
    }
}

/** Payment strategy: PayPal. */
class PayPalPayment implements PaymentStrategy {
    process(amount: number): string {
        return `Processing PayPal payment of ${amount}`;
    }
}

/** Payment strategy: crypto. */
class CryptoPayment implements PaymentStrategy {
    process(amount: number): string {
        return `Processing crypto payment of ${amount}`;
    }
}

/** Context that uses a PaymentStrategy; can swap strategy at runtime via setStrategy. */
class PaymentProcessor {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    processPayment(amount: number): string {
        return this.strategy.process(amount);
    }
}

export { CreditCardPayment, PayPalPayment, CryptoPayment, PaymentProcessor };

