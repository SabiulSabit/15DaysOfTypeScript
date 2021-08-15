import faker from 'faker';
import { Mappable } from './CustomMap'

export class Company implements Mappable {
    //company property
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    //constructor
    constructor() {
        //generate fake random data
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    //add content for marker
    markerContent(): string {
        return `Company Name: ${this.companyName} `
    }
}