"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0; //up down
		this.positionCol = 0; //left right
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
    print() {
		for (let field of this.field) {
			console.log(field);
		}
	}

	rungame(){
		while(true){
			const input = prompt("Which way? (d=moveright a=moveleft w=moveup s=movedown)");
			console.log(`your direction ${input}`);
				if (input === "d") {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
		
	  
			// `your direction ${input}`
		}
		
	}
	

}
		
// 	// รับค่า input
// 	rungame(){
// 	while(true){
// 		const input = prompt("which way? (d=moveright a=moveleft w=moveup s=movedown)");
// 		// console.log(your direction ${command});

// 		console.log(this.field);
// 			if(command === "d"){
// 				// console.log(this.positionRow);
// 				// console.log(this.positionCol);
// 				this.positionRow=this.positionRow+
// 				// console.log(this.positionCol)
// 			}
// 			else if(command === "a"){
// 				// console.log(this.positionRow);
// 				// console.log(this.positionCol);
// 				this.moveleft();
// 				// console.log(this.positionCol)
// 			}
// 			else if(command === "w"){
// 				// console.log(this.positionRow);
// 				// console.log(this.positionCol);
// 				this.moveup();
// 				// console.log(this.positionRow)
// 			}
// 			else if(command === "s"){
// 				// console.log(this.positionRow);
// 				// console.log(this.positionCol);
// 				this.moveup();
// 				// console.log(this.positionRow)
// 			}
// 			else {
// 				console.log("input not correctly");
// 			}
// 			console.log(this.field[this.positionRow][this.positionCol])
// 			this.field[this.positionRow][this.positionCol] = pathCharacter
// 	}
// }

        // clear();

        // Replace with your own code //
        // console.log(print; // Please REMOVE this line before you start your code!
    // }


		
    
    







	
	// Your Code //
// }

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
newGame.rungame();
