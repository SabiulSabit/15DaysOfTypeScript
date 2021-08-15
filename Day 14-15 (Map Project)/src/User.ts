import faker from 'faker';
import { Mappable } from './CustomMap'

export class User implements Mappable {
    //user property
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    //constructor
    constructor() {
        //generate fake random data
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    //add content for marker
    markerContent(): string {
        return `User Name: ${this.name} `
    }
}