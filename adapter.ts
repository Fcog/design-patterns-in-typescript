/**
 * The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 * 
 * Easy definition: An adapter is a class that converts the interface of one class into another interface that clients expect.
 */

interface OldPaymentProcessor { 
    processPayment(amount: number): string;
    getTransactionId(): string;
    getPaymentStatus(): string;
}

/** Legacy payment processor; interface uses processPayment, getTransactionId, getPaymentStatus. */
class OldPaymentProcessor implements OldPaymentProcessor {
    processPayment(amount: number): string {
        return `Processing payment of ${amount}`;
    }
    getTransactionId(): string {
        return '1234567890';
    }
    getPaymentStatus(): string {
        return 'success from old payment processor';
    }
}

/** Different interface for new payment processor; interface uses process, getTransId, getPayStatus. */
interface NewPaymentProcessor {
    process(amount: number): string;
    getTransId(): string;
    getPayStatus(): string;
}

/** New payment processor; interface uses process, getTransId, getPayStatus. */
class NewPaymentProcessor implements NewPaymentProcessor {
    process(amount: number): string {
        return `Processing payment of ${amount}`;
    }
    getTransId(): string {
        return '1234567890';
    }
    getPayStatus(): string {
        return 'success from new payment processor';
    }
}

/** Adapts OldPaymentProcessor to the NewPaymentProcessor interface so clients can use the new API. */
class PaymentAdapter implements NewPaymentProcessor {
    private oldPaymentProcessor: OldPaymentProcessor;
    constructor(oldPaymentProcessor: OldPaymentProcessor) {
        this.oldPaymentProcessor = oldPaymentProcessor;
    }
    process(amount: number): string {
        return this.oldPaymentProcessor.processPayment(amount);
    }
    getTransId(): string {
        return this.oldPaymentProcessor.getTransactionId();
    }
    getPayStatus(): string {
        return this.oldPaymentProcessor.getPaymentStatus();
    }
}

export { OldPaymentProcessor, NewPaymentProcessor, PaymentAdapter };