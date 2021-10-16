let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// console.log(generateTarget())

function getAbsoluteDistance(num1,num2) {
  return Math.abs(num1 - num2);
}

let compareGuesses = (human, computer, target) => {
  const userG = getAbsoluteDistance(target,human);
  const computerG = getAbsoluteDistance(target,computer);
  return userG <= computerG;
};


const updateScore = winner =>{
  winner === 'human' ? humanScore +=1 : computerScore +=1
}

function advanceRound() {
  currentRoundNumber += 1;
};