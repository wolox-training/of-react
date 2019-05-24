import React from 'react';

import styles from './styles.module.scss';

function Square({value,onClick}){
  return (
  <button 
    className={styles.square} 
    onClick={onClick}
    type="button" 
  >
    {value}
  </button>
);
}

export default Square;
