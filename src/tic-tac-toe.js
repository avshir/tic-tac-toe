class TicTacToe {
    constructor() {
			this.curPlayer = 'x';// или 'o'
			this.gameField = [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			];
			this.winner = null;
    }

    getCurrentPlayerSymbol() {
			return this.curPlayer;
    }

	nextTurn(rowIndex, columnIndex) {
		//Boolean(null) === false
		if (this.gameField[rowIndex][columnIndex] === null) {
			this.gameField[rowIndex][columnIndex] = this.curPlayer;

			if (this.curPlayer === 'x') {
				return this.curPlayer = 'o'
			} else {
				return this.curPlayer = 'x';
			}
		} else {
			return this.curPlayer;
		}
  }

    isFinished() {

    }

	getWinner() {
		if ((this.gameField[0][0] === this.gameField[1][1]) && (this.gameField[0][0] === this.gameField[2][2]) )  {
			this.winner = this.gameField[0][0];
			return this.winner;
		} else if ((this.gameField[0][2] === this.gameField[1][1]) && (this.gameField[0][2] === this.gameField[2][0]) )  {
			this.winner = this.gameField[0][2];
			return this.winner;
		}

		for (let i = 0; i < this.gameField.length; i++) {
			if (this.gameField.every((item) => (item[i] === this.gameField[i][i])) ) {
				this.winner = this.gameField[i][i];
				return this.winner;
			} else if (this.gameField[i].every((item) => (item === this.gameField[i][i])) ) {
				this.winner = this.gameField[i][i];
				return this.winner;
			} 
		}

		//this.winner = null;
		return this.winner;
  }

	noMoreTurns() {
		for (let i = 0; i < this.gameField.length; i++) {
			if (this.gameField.some((item) => item[i] === null) ) {
				return false;
			} 
		}
		return true;
  }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
			return this.gameField[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
