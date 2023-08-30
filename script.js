let randomNumber = parseInt(Math.random()*100 +1)
// console.log(randomNumber)
let submitBtn = document.querySelector('#submit')
let guessSlot = document.querySelector('.preGuess')
let userInput = document.querySelector('#guessField')
let remainingChance = document.querySelector('.lastResult')
let LoOrHi = document.querySelector('.LoOrHi')
let startOver = document.querySelector('.resultParas')

let p = document.createElement('p')
let playGame = true;
let preGuesses = [];
let chance = 1;



if (playGame){

    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        checkValidation(guess)
    })
}
const checkValidation = (guess)=>{
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    }else if(guess<1){
        alert("Please Enter a number more than 1")
    }else if(guess>100){
        alert("Please Enter a number less than 100")
    }else{
        preGuesses.push(guess);
        if(chance===10){
            endGame()
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
        }else{
           cleanUpGuess(guess)
           checkGuess(guess)
        }
    }
}

const checkGuess =(guess)=>{
    if(guess===randomNumber){
        displayMessage('Congratulation, you guesssed the right number')
        endGame()
    } else if(guess<randomNumber){
        displayMessage('Guessed number is smaller than the random number.')
    }else if (guess>randomNumber){
        displayMessage('Guessed number is larger than the random number.')
    }
}
const cleanUpGuess=(guess)=>{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    chance++
    remainingChance.innerHTML=`${11-chance}`
   
    
}
const displayMessage=(message)=>{
    LoOrHi.innerHTML=`<h2>${message}</h2>`
}
const endGame = ()=>{
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.innerHTML=`<h2 id ='startGame' >Start New Game</h2>`;
     startOver.appendChild(p)
     playGame = false;
     startGame()

}
const startGame = ()=>{
    document.querySelector("#startGame").addEventListener('click',function(){
        userInput.removeAttribute('disabled');
        preGuesses = [];
        chance = 1;
        randomNumber = parseInt(Math.random()*100 +1);
        guessSlot.innerHTML = ''
        remainingChance.innerHTML=`${11-chance}`
        startOver.removeChild(p);
        playGame = true;
        displayMessage('')
    })
}