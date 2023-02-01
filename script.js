// ----------selecting all HTML elements & declaring variables starts ----------
const rules = document.getElementById('rules')
const showRules = document.getElementById('showRules')
const closeRules = document.getElementById('closeRules')
const play = document.getElementById('play')
const resultSection = document.getElementById('resultSection')
const playAgain = document.getElementById('playAgain')
const tryAgain = document.getElementById('tryAgain')
let myPick = document.getElementById('myPick')
let computersPick = document.getElementById('computersPick')
let result = document.getElementById('result')
let score = document.getElementById('score')
let myChoice;
// ----------selecting all HTML elements & declaring variables ends ----------

/* --------------------------------------------------
Code for Toggle Rule Box Starts
-------------------------------------------------- */

showRules.addEventListener('click', () => {
    rules.style.display = 'block';
})
closeRules.addEventListener('click', () => {
    rules.style.display = 'none';
})

/* --------------------------------------------------
Code for Toggle Rule Box Ends
-------------------------------------------------- */

/* -------------------------------------*** -------------------------------------  */

/* --------------------------------------------------
MAIN CODE FOR THE GAME STARTS
-------------------------------------------------- */

function computersChoice() {
    let choices = ['rock', 'paper', 'sciccor'];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

const selectMyChoice = (btnValue) => {
    play.style.display = 'none';
    resultSection.style.display = 'flex'
    let compSelectedChoice = computersChoice();
    myChoice = document.getElementById(btnValue).value;

    if (myChoice === 'rock' && compSelectedChoice === 'rock') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': TIE')
        myPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        myPick.style.border = '16px solid #ffd600'
        computersPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        computersPick.style.border = '16px solid #ffd600'
        result.innerText = 'Oops! TIE'
        tryAgain.style.display = 'block'

    } else if (myChoice === 'rock' && compSelectedChoice === 'paper') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Lose')
        myPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        myPick.style.border = '16px solid #ffd600'
        computersPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        computersPick.style.border = '16px solid #ff4370'
        result.innerText = 'YOU LOSE'
        tryAgain.style.display = 'block'

    } else if (myChoice === 'rock' && compSelectedChoice === 'sciccor') {

        console.log('Hurray! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Win')
        myPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        myPick.style.border = '16px solid #ffd600'
        computersPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        computersPick.style.border = '16px solid #cc00ff'
        result.innerText = 'YOU WIN'
        score.innerText++
        tryAgain.style.display = 'none'

    } else if (myChoice === 'paper' && compSelectedChoice === 'rock') {

        console.log('Hurray! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Win')
        myPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        myPick.style.border = '16px solid #ff4370'
        computersPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        computersPick.style.border = '16px solid #ffd600'
        result.innerText = 'YOU WIN'
        score.innerText++
        tryAgain.style.display = 'none'

    } else if (myChoice === 'paper' && compSelectedChoice === 'paper') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': TIE')
        myPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        myPick.style.border = '16px solid #ff4370'
        computersPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        computersPick.style.border = '16px solid #ff4370'
        result.innerText = 'Oops! TIE'
        tryAgain.style.display = 'block'

    } else if (myChoice === 'paper' && compSelectedChoice === 'sciccor') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Lose')
        myPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        myPick.style.border = '16px solid #ff4370'
        computersPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        computersPick.style.border = '16px solid #cc00ff'
        result.innerText = 'YOU LOSE'
        tryAgain.style.display = 'block'

    } else if (myChoice === 'sciccor' && compSelectedChoice === 'rock') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Lose')
        myPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        myPick.style.border = '16px solid #cc00ff'
        computersPick.innerHTML = `<img src="./assets/icon-rock.svg" />`
        computersPick.style.border = '16px solid #ffd600'
        result.innerText = 'YOU LOSE'
        tryAgain.style.display = 'block'

    } else if (myChoice === 'sciccor' && compSelectedChoice === 'paper') {

        console.log('Hurray! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': You Win')
        myPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        myPick.style.border = '16px solid #cc00ff'
        computersPick.innerHTML = `<img src="./assets/icon-paper.svg" />`
        computersPick.style.border = '16px solid #ff4370'
        result.innerText = 'YOU WIN'
        score.innerText++
        tryAgain.style.display = 'none'

    } else if (myChoice === 'sciccor' && compSelectedChoice === 'sciccor') {

        console.log('Oops! you choose ', myChoice, ' and computer choose ', compSelectedChoice, ': TIE')
        myPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        myPick.style.border = '16px solid #cc00ff'
        computersPick.innerHTML = `<img src="./assets/icon-scissors.svg" />`
        computersPick.style.border = '16px solid #cc00ff'
        result.innerText = 'Oops! TIE'
        tryAgain.style.display = 'block'

    }
}

/* --------------------------------------------------
MAIN CODE FOR THE GAME ENDS
-------------------------------------------------- */

/* --------------------------------------------------
Code for Play Again Button Starts
-------------------------------------------------- */

playAgain.addEventListener('click', () => {
    play.style.display = 'flex';
    resultSection.style.display = 'none'
    tryAgain.style.display = 'none'
})

/* --------------------------------------------------
Code for Play Again Button Ends
-------------------------------------------------- */