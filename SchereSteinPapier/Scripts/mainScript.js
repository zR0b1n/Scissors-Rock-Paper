// 1 = Schere, 2 = Stein, 3 = Papier

function playSchere(){
	computerChoice = Math.floor(Math.random()* (4-1))+1;
	if(computerChoice==1){
		document.getElementById('displayGame').innerHTML = "Unentschieden! (Computer wählte Schere ✌🏻)";
	}
	else if(computerChoice==2){
		document.getElementById('displayGame').innerHTML = "Du hast verloren! (Computer wählte Stein👊🏻)";
	}
	else if(computerChoice==3){
		document.getElementById('displayGame').innerHTML = "Du hast gewonnen! (Computer wählte Papier🤚🏻)";
	}
}

function playStein(){
	computerChoice = Math.floor(Math.random()* (4-1))+1;
	if(computerChoice==1){
		document.getElementById('displayGame').innerHTML = "Du hast gewonnen! (Computer wählte Schere✌🏻)";
	}
	else if(computerChoice==2){
		document.getElementById('displayGame').innerHTML = "Unentschieden! (Computer wählte Stein👊🏻)";
	}
	else if(computerChoice==3){
		document.getElementById('displayGame').innerHTML = "Du hast verloren! (Computer wählte Papier🤚🏻)";
	}
}

function playPapier(){
	computerChoice = Math.floor(Math.random() * (4-1))+1;
	if(computerChoice==1){
		document.getElementById('displayGame').innerHTML = "Du hast verloren! (Computer wählte Schere✌🏻)";
	}
	else if(computerChoice==2){
		document.getElementById('displayGame').innerHTML = "Du hast gewonnen! (Computer wählte Stein👊🏻)";
	}
	else if(computerChoice==3){
		document.getElementById('displayGame').innerHTML = "Unentschieden1 (Computer wählte Papier🤚🏻)";
	}
}