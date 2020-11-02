abstract class Vehicle {
  abstract get vehicleType(): string;

  drive(): void {
    console.log(`Driving ${this.vehicleType}`);
  }
}

class Car extends Vehicle {
  get vehicleType(): string {
    return 'Car';
  }
}

export { Vehicle, Car };
