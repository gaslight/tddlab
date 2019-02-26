const calculateScore = (rolls) => rolls.reduce((total, roll) => total + roll, 0)

export default calculateScore