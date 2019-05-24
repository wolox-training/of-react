import React from 'react';

import PropTypes from "prop-types";

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

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Square;
