// Parent Class
class Vehicle {
    constructor(brand, maxSpeed) {
      this.brand = brand;
      this.maxSpeed = maxSpeed;
    }
  
    drive() {
      return `The ${this.brand} vehicle drives at a maximum speed of ${this.maxSpeed} km/h.`;
    }
  
    stop() {
      return `The ${this.brand} vehicle has stopped.`;
    }
  }
  
  // Child Class 1
  class Car extends Vehicle {
    constructor(brand, maxSpeed, fuelType) {
      super(brand, maxSpeed); // Call the parent class constructor
      this.fuelType = fuelType;
    }
  
    drive() {
      return `The ${this.brand} car, powered by ${this.fuelType}, drives at a maximum speed of ${this.maxSpeed} km/h.`;
    }
  }
  
  // Child Class 2
  class Bicycle extends Vehicle {
    constructor(brand, maxSpeed, isElectric) {
      super(brand, maxSpeed);
      this.isElectric = isElectric;
    }
  
    drive() {
      const typeOfBike = this.isElectric ? "electric" : "manual";
      return `The ${this.brand} bicycle (${typeOfBike}) rides at a maximum speed of ${this.maxSpeed} km/h.`;
    }
  }
  
  // Child Class 3
  class Truck extends Vehicle {
    constructor(brand, maxSpeed, capacity) {
      super(brand, maxSpeed);
      this.capacity = capacity;
    }
  
    drive() {
      return `The ${this.brand} truck, with a capacity of ${this.capacity} tons, drives at a maximum speed of ${this.maxSpeed} km/h.`;
    }
  
    loadCargo(weight) {
      if (weight <= this.capacity) {
        return `The truck has successfully loaded ${weight} tons of cargo.`;
      } else {
        return `Cannot load ${weight} tons. Exceeds capacity of ${this.capacity} tons.`;
      }
    }
  }
  
  // Example Usage
  const vehicles = [
    new Car("Tesla", 200, "electric"),
    new Bicycle("Giant", 25, false),
    new Truck("Volvo", 120, 20)
  ];
  
  // Demonstrate Polymorphism: Same method, different behaviors
  vehicles.forEach(vehicle => {
    console.log(vehicle.drive());
    console.log(vehicle.stop());
  });
  
  // Special Truck Functionality
  const truck = vehicles[2]; // The third vehicle is a truck
  console.log(truck.loadCargo(15)); // Should succeed
  console.log(truck.loadCargo(25)); // Should fail
  

// # Key Takeaways
// Inheritance: Subclasses (Car, Bicycle, Truck) inherit shared functionality (drive, stop) from the Vehicle class.
// Overriding: Subclasses customize the drive method to provide behavior specific to their type.
// Polymorphism: The drive method behaves differently based on the type of vehicle calling it.
// Specialization: Each subclass has unique properties (fuelType, isElectric, capacity) and methods (loadCargo).