function userPick (){
	var userPick = prompt("Choose rock, paper or scissors").toLowerCase();
	return userPick
}

function computerPick (){
	let computerPick=Math.random()*100;
		if (computerPick <33) {
		computerPick ="rock";
		} else if (computerPick <=66){
		computerPick="paper";
		}else{
		computerPick="scissors";
		}
		return computerPick
}

//set-up function for game
function playGame (){
//code for rock choice
	if (userPick == "rock" && computerPick == "rock"){
		return "Draw";
	} else if (userPick == "rock" && computerPick == "paper"){
		return "Computer wins! paper beats rock";
	} else if (userPick == "rock" && computerPick == "scissors"){
		return "Player wins! rock beats scissors;
}

//code for paper choice
if (userPick == "paper" && computerPick == "rock"){
		return "Player wins! paper beats rock";
	} else if (userPick == "paper" && computerPick == "paper"){
		return "Draw";
	} else if (userPick == "paper" && computerPick == "scissors"){
		return "Computer wins! scissors beats paper;
}

//code for scissors
if (userPick == "scissors" && computerPick == "rock"){
		return "Computer wins! rock beats scissors";
	} else if (userPick == "scissors" && computerPick == "paper"){
		return "Player wins! scissors beats paper";
	} else if (userPick == "scissors" && computerPick == "scissors"){
		return "Draw";
}