/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const initialAcceleration = 3; // acceleration (m/s^2)
const initialTime = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurningRate = 0.5; // fuel burn rate (kg/s)


const finalDistance = initialDistance + (initialVelocity * (initialTime / 3600)) //calcultes new distance
const remainingFuel = fuelBurningRate * initialTime;  //calculates remaining fuel


const props= {
  initialVelocity,
  initialAcceleration,
  initialTime
}; 

function NewVelocity (prop) {
return Velocity + (initialAcceleration * (initialTime / 3600) ) //calculates new velocity based on acceleration
} 
const finalVelocity = NewVelocity(initialVelocity, initialAcceleration, initialTime); 

// Pick up an error with how the function below is called and make it robust to such errors

console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






