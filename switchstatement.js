function moveCommand(direction) {
	var whatHappens;
	switch(direction) {
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You arrived home";
			break;
		case "right":
			whatHappens = "You found a river";
			break;
		case "left":
			whatHappens = "You run into a troll";
			break; 
		default:                                                  // nqs ndodh dicka tjeter, ndryshe nga ato te parashikuara lart  
			whatHappens = "please enter a valid direction";          
	}
	return whatHappens;                                         // return statement gjithmone ne fund
}


// pra i ben check me rradhe gjithe opsionet nqs perputhen, nqs perputhet merr break(programi ndalon) dhe shkon tek "return (whathappens)"