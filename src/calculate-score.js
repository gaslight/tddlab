const calculateScore = (rolls) => {
  if (rolls.length > 2 && rolls[0] + rolls[1] === 10) {
    return rolls[0] + rolls[1] + (2 * rolls[2]);
  } else {
    return rolls.reduce((total, roll) => total + roll, 0);
  }
}

export default calculateScore