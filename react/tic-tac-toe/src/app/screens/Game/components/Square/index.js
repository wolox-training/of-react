import React from 'react';

import styles from './styles.module.scss';

const Square = (props) => (
  <button 
    className={styles.square} 
    onClick={() => {props.onClick()}}
    type="button" 
  >
    {props.value}
  </button>
);

export default Square;
