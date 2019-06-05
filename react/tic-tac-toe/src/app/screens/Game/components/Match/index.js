import React from 'react';

import styles from './styles.module.scss';

const Match = (props) => {
    const {player_one, player_two, winner} = props.match;
    return (
    <tr>
        <td className={styles.tableChild}>{player_one}</td>
        <td className={styles.tableChild}>{player_two}</td>
        <td className={styles.tableChild}>{winner === 'player_one' ? player_one : winner === 'player_two' ? player_two : winner}</td> 
    </tr>
);
}

export default Match;
