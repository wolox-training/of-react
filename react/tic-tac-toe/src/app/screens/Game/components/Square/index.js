import React, { Component } from 'react';

import PropTypes from "prop-types";

import styles from './styles.module.scss';

class Square extends Component {

  handleSquareClick = () => this.props.onClick(this.props.num);

  render () {
    return (
      <button 
        className={styles.square} 
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
