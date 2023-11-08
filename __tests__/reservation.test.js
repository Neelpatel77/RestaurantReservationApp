// __tests__/reservation.test.js
import { makeReservation } from '../reservation';

describe('makeReservation function', () => {
  it('should return the total number of seats remaining after a reservation is made', () => {
    expect(makeReservation(2, 10)).toBe(8); // Test Requirement 1
  });

  it('should throw an error if numGuests is 0', () => {
    expect(() => makeReservation(0, 10)).toThrow('Guests cannot be 0'); // Test Requirement 2
  });

  it('should throw an error if numGuests is negative', () => {
    expect(() => makeReservation(-2, 10)).toThrow('Must provide a positive number'); // Test Requirement 3
  });

  it('should throw an error if numGuests is more than 6', () => {
    expect(() => makeReservation(7, 10)).toThrow('Maximum number of people per reservation is 6'); // Test Requirement 4
  });

  it('should throw an error if adding the party exceeds available seats', () => {
    expect(() => makeReservation(6, 3)).toThrow('Not enough available seats for the reservation'); // Test Requirement 5
  });
});



// export function makeReservation(numGuests, maxCapacity) {
//     if (numGuests === 0) {
//         throw new Error('Guests cannot be 0'); // Requirement 2: Throw an error if numGuests is 0
//     }

//     if (numGuests < 0) {
//         throw new Error('Must provide a positive number'); // Requirement 3: Throw an error if numGuests is negative
//     }

//     if (numGuests > 6) {
//         throw new Error('Maximum number of people per reservation is 6'); // Requirement 4: Throw an error if numGuests is more than 6
//     }

//     if (numGuests > maxCapacity) {
//         throw new Error('Not enough available seats for the reservation'); // Requirement 5: Throw an error if adding the party exceeds available seats
//     }

//     const remainingSeats = maxCapacity - numGuests;
//     return remainingSeats; // Requirement 1: Return the total number of seats remaining after a reservation is made
// }
