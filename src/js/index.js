
export const options = {
  rock: 'Rock',
  paper: 'Paper',
  scissor: 'Scissor'
};

export const game = (option1, option2) => {
  if (option1 === option2){
    return 'TIE';
  }
  
  if (option1 === 'Rock' && option2 === 'Paper' || option1 === 'Paper' && option2 === 'Rock') {
    return 'Paper wins!!';
  }
  
  if (option1 === 'Paper' && option2 === 'Scissor' || option1 === 'Scissor' && option2 === 'Paper') {
    return 'Scissor wins!!';
  }
    
  if (option1 === 'Rock' && option2 === 'Scissor' || option1 === 'Scissor' && option2 === 'Rock') {
    return 'Rock wins!!';
  }
};

// game -> 
// x 2 params de entre (rock, paper, scissors)
// x si recibe rock y paper = gana rock
// x si recibe paper y scissor = gana scissor
// x si recibe scissor y rock = gana rock
// x si recibe 2 params = empate