/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const rentalCost = days * oneDayCost;

  if (days >= 7) {
    return rentalCost - 50;
  }

  if (days >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
