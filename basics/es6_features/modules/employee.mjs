//Employee class
import { Person } from "./person.mjs";

export class Employee extends Person {
    constructor(name, age, organization) {
        super(name, age);
        this.organization = organization;
    }

    getDetails() {
        return super.getDetails() + ` is working in ${this.organization} organization`;
    }
}
