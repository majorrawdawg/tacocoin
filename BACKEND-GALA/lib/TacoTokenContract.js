"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseDto {
    // Basic validation logic
    validate() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === null) {
                throw new Error(`Validation failed: ${key} is required.`);
            }
        }
        return true;
    }
    serialize() {
        return JSON.stringify(this);
    }
}
class MintTacoCoinDto extends BaseDto {
    constructor(amount, recipient) {
        super();
        this.amount = amount;
        this.recipient = recipient;
    }
    validate() {
        super.validate();
        if (this.amount <= 0) {
            throw new Error("Validation failed: amount must be greater than 0.");
        }
        return true;
    }
}
class TransferTacoCoinDto extends BaseDto {
    constructor(amount, from, to) {
        super();
        this.amount = amount;
        this.from = from;
        this.to = to;
    }
    validate() {
        super.validate();
        if (this.amount <= 0) {
            throw new Error("Validation failed: amount must be greater than 0.");
        }
        return true;
    }
}
