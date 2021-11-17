const resultDisplay = document.getElementById("result");
const computerPickDisplay = document.getElementById("computer-pick");
const userPickDisplay = document.getElementById("user-pick");
const possibleChoices = document.querySelectorAll('button')
let userPick
let computerPick
let result

//fuction to take user pick from buttons using event listener and run computerPick and playGame fuctions
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userPick = e.target.id
	userPickDisplay.innerHTML = userPick;
	generateComputerPick()
	playGame()
}))

//fuction to generate computer pick
function generateComputerPick(){
	let computerPick=Math.random()*100;
		if (computerPick <33) {
		computerPick ="rock";
		} else if (computerPick <=66){
		computerPick="paper";
		}else{
		computerPick="scissors";
		}
		computerPickDisplay.interHTML =computerPick;
}

//set-up function for game, which contains the if logic for each choice the user can make
function playGame(){
//code for rock choice
	if (userPick == "rock" && computerPick == "rock"){
		result = "Draw";
	} else if (userPick == "rock" && computerPick == "paper"){
		result = "Computer wins! paper beats rock";
	} else if (userPick == "rock" && computerPick == "scissors"){
		result = "Player wins! rock beats scissors";
}

//code for paper choice
if (userPick == "paper" && computerPick == "rock"){
		result = "Player wins! paper beats rock";
	} else if (userPick == "paper" && computerPick == "paper"){
		result = "Draw";
	} else if (userPick == "paper" && computerPick == "scissors"){
		result = "Computer wins! scissors beats paper";
}

//code for scissors
if (userPick == "scissors" && computerPick == "rock"){
		result = "Computer wins! rock beats scissors";
	} else if (userPick == "scissors" && computerPick == "paper"){
		result = "Player wins! scissors beats paper";
	} else if (userPick == "scissors" && computerPick == "scissors"){
		result = "Draw";
	}
		resultDisplay.innerHTML = result;
}