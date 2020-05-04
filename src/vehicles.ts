abstract class Vehicle {
    abstract getVehicleType(): string

    drive(): void {
        console.log('Driving');
    }
}

class Car extends Vehicle {
    getVehicleType(): string {
        return 'Car';
    }
}

export {
    Vehicle,
    Car
};
