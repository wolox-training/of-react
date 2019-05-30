import React, { Component } from 'react';

import styles from './styles.module.scss';

import Board from './components/Board';

import { calculateWinner, decideGameStatus } from '../../../utils/utils';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber:0,
    xIsNext: true,
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = `Go to ${move ? `move ${move}` : 'game start' }`
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = decideGameStatus(winner,this.state.xIsNext);
    return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
         />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
  }
}

export default Game;
