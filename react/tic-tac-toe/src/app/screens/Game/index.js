import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MatchesService from '../../../services/MatchesService';
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import Board from './components/Board';
import Topbar from '../../components/Topbar';
import GameForm from './components/GameForm';

import { calculateWinner, decideGameStatus } from '../../../utils/utils';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber:0,
    xIsNext: true,
    playerOne: '',
    playerTwo: '',
    hasSubmited: false,
    winner: '',
    tie: false,
  };

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    var current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.state.winner || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    const tie = squares.every((square) => square!==null);
    this.setState({
      ...this.state,
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winner: winner,
      tie: tie,
    });
    if(winner || tie) {
      const theWinner = `${!winner ? 'tie' : winner ==='X' ? this.state.playerOne : this.state.playerTwo}`;
      this.props.dispatch(MatchesService.createMatch(
        {
          player_one: this.state.playerOne,
          player_two: this.state.playerTwo,
          winner: theWinner,
          createdAt: '',
          id: ''
        }
      ));
    }
  }

  submitNames = (values) => {
    this.setState({
      ...this.state,
      playerOne: values.playerOne,
      playerTwo: values.playerTwo,
      hasSubmited: true,
    });
  };

  retry = () => {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber:0,
      xIsNext: true,
      playerOne: '',
      playerTwo: '',
      hasSubmited: false,
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
    const moves = history.map((step, move) => {
      const desc = move ? t('game.goToMoveMsg', {move: move}) : t('game.goToStartMsg');
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = decideGameStatus(this.state.winner,this.state.xIsNext, this.state.playerOne, this.state.playerTwo, this.state.tie);
    return (
      <Fragment>
        <Topbar logout={this.props.logout} history={this.props.history} />
         {!this.state.hasSubmited ? 
          <GameForm
            onSubmit={this.submitNames}
            submited={this.state.hasSubmited}
          />
          :
          <div className={styles.game}>
            <div className={styles.gameBoard}>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
              <button onClick={this.retry} className={styles.retryButton}>{t('game.playAgainMsg')}</button>
            </div>
            <div className={styles.gameInfo}>
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
          }; 
      </Fragment>
    );
  }
}

export default withTranslation()(connect()(Game));
