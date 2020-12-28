let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win1(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div_p.innerHTML = `${userChoice}${smallUserWord} crushes ${computerChoice}${smallCompWord}. You won!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 400) //Arrow function - ES6
}
function win2(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div_p.innerHTML = `${userChoice}${smallUserWord} covers ${computerChoice}${smallCompWord}. You won!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 400)
}
function win3(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div_p.innerHTML = `${userChoice}${smallUserWord} cuts ${computerChoice}${smallCompWord}. You won!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 400)
}

function lose1(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div_p.innerHTML = `${computerChoice}${smallCompWord} crushes ${userChoice}${smallUserWord}. You lost!`;
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 400)
}
function lose2(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div_p.innerHTML = `${computerChoice}${smallCompWord} covers ${userChoice}${smallUserWord}. You lost!`;
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 400)
}
function lose3(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div_p.innerHTML = `${computerChoice}${smallCompWord} cuts ${userChoice}${smallUserWord}. You lost!`;
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 400)
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Comp".fontsize(2).sub();
    result_div_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. It's a draw!`;
    document.getElementById(userChoice).classList.add("yellow-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("yellow-glow"), 400)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
            win1(userChoice, computerChoice)
            break;
        case "PaperRock":
            win2(userChoice, computerChoice)
            break;
        case "ScissorsPaper":
            win3(userChoice, computerChoice)
            break;
        case "ScissorsRock":
            lose1(userChoice, computerChoice)
            break;
        case "RockPaper":
            lose2(userChoice, computerChoice)
            break;
        case "PaperScissors":
            lose3(userChoice, computerChoice)
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"))
    paper_div.addEventListener('click', () => game("Paper"))
    scissors_div.addEventListener('click', () => game("Scissors"))
}

main();
