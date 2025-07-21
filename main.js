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
	};
	// รับค่า input
	rungame(){
	while(true){
		const input = prompt("which way? (d=moveright a=moveleft w=moveup s=movedown)");
		// console.log(your direction ${command});

		// console.log(this.field);
			if(command === "d"){
				// console.log(this.positionRow);
				// console.log(this.positionCol);
				this.positionRow=this.positionRow+
				// console.log(this.positionCol)
			}
			else if(command === "a"){
				// console.log(this.positionRow);
				// console.log(this.positionCol);
				this.moveleft();
				// console.log(this.positionCol)
			}
			else if(command === "w"){
				// console.log(this.positionRow);
				// console.log(this.positionCol);
				this.moveup();
				// console.log(this.positionRow)
			}
			else if(command === "s"){
				// console.log(this.positionRow);
				// console.log(this.positionCol);
				this.moveup();
				// console.log(this.positionRow)
			}
			else {
				console.log("input not correctly");
			}
			console.log(this.field[this.positionRow][this.positionCol])
			this.field[this.positionRow][this.positionCol] = pathCharacter
	}
}

        // clear();

        // Replace with your own code //
        // console.log(print; // Please REMOVE this line before you start your code!
    // }

	// const direction = prompt(which way?)
	
	// function move(direction) {
	// 	if(direction === "a") {
	// 		moveright()
	// 	}
	// 	 else if(direction === "d") {
	// 		moveleft()
	// 	}
	// 	else if(direction === "w") {
	// 		moveup()
	// 	}
	// 	else if (direction === "s") {
	// 		movedown()
	// 	}
	
	// }
		
    }
    















	// move(direction) {
	// 	let x = 0; // Starting row index
	// 	let y = 0; // Starting column index
	// 	const moves = [];
	// 	moves.push(board[x][y]); 
	// 		function moveRight() {
  	// 			y++; 
  	// 		moves.push(board[x][y]);
	// 		}

	// 		function moveLeft() {
  	// 			y--; 
  	// 		moves.push(board[x][y]);
	// 		}

	// 		function moveUp() {
  	// 			x--; 
  	// 		moves.push(board[x][y]);
	// 		}

	// 		function moveDown() {
  	// 			x++; 
 	// 		 moves.push(board[x][y]);
	// 		}
// }


// 	print() {
// 		for (let i = 0; i < this.field.length; i++) {
//         console.log(this.field[i]);
// 		let i;
// 		while(true) {const command = prompt("input:");
// 	console.log(`your input ${command}`);

// 		if (command == 6) {
// 			console.log(this.positionRow);
// 			console.log(this.positionCol);
// 		}else
		// clear();
// for (let i = 0; i < this.field.length; i++) {
//         console.log(this.field[i].join(''));
    // }
		// Replace with your own code //
// 		console.log(this.field); // Please REMOVE this line before you start your code!
// 	}
// 	}
	
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
