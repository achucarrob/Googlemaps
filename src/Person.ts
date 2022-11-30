import { Faker } from "@faker-js/faker";

export class Person {
    user: string;
    location: {
        lat: string;
        lng: string;
    };

    constructor(user: string, location: {lat: string; lng: string}) {
        this.user = user;
        this.location = {
            lat: location.lat,
            lng: location.lng,

        };
    }


}