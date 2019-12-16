import React, { Component} from 'react';

import PropTypes from "prop-types";

import styles from './styles.module.scss';
class Square extends Component {

  handleSquareClick = () => this.props.onClick(this.props.num);

  render () {
    const squareColor = this.props.value === 'X' ? styles.playerX : styles.playerO;
    return (
      <button 
        className={`${styles.square} ${squareColor}`} 
        onClick={this.handleSquareClick}
        type="button" 
      >
        {this.props.value}
      </button>
    );
    }
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Square;
