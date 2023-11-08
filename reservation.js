// reservation.js
export function makeReservation(numGuests, maxCapacity) {
  if (numGuests === 0) {
    throw new Error('Guests cannot be 0');
  }

  if (numGuests < 0) {
    throw new Error('Must provide a positive number');
  }

  if (numGuests > 6) {
    throw new Error('Maximum number of people per reservation is 6');
  }

  if (numGuests > maxCapacity) {
    throw new Error('Not enough available seats for the reservation');
  }

  return maxCapacity - numGuests;
}
