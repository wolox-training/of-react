import React, { Component } from 'react';
import styles from './styles.module.scss';


class TableMatches extends Component {
  

  renderMatch(match) {
    return (
      <tr>
        <td className={styles.tableChild}>{match.player_one}</td>
        <td className={styles.tableChild}>{match.player_two}</td>
        <td className={styles.tableChild}>{match.winner === 'player_one' ? match.player_one : match.winner === 'player_two' ? match.player_two : match.winner}</td> 
      </tr>
    );
  }

  render () {
    const { matches } = this.props
    return (
      <div className={styles.matches}>
        <table className={styles.tableMatches}>
          <tr>
            <th className={styles.tableHeader}>Jugador Uno</th>
            <th className={styles.tableHeader}>Jugador Dos</th>
            <th className={styles.tableHeader}>Ganador</th> 
          </tr>
          {matches.map(this.renderMatch)}
        </table>
      </div>
    );
  }
}

export default TableMatches;
