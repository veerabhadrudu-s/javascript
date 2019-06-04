//Student class
import { Person } from "./person";

export class Student extends Person {
    constructor(name, age, institute) {
        super(name, age);
        this.institute = institute;
    }
    getDetails() {
        return super.getDetails() + ` is studing in ${this.institute} institute`;
    }
}