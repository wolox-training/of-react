import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string } from 'prop-types';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import actionsCreators from '../../../redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={value => this.props.searchBook(value)} />
          {this.props.books.length ? (
            this.props.bookSearch ? (
              this.props.books
                .filter(item => item.name.toLowerCase().includes(this.props.bookSearch))
                .map(this.renderBooks)
            ) : (
              this.props.books.map(this.renderBooks)
            )
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.props.bookSelected.length ? (
          <ShoppingCart
            data={this.props.bookSelected}
            addItem={this.props.addItem}
            removeItem={this.props.removeItem}
          />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  books: arrayOf(Object).isRequired,
  bookSelected: arrayOf(Object).isRequired,
  bookSearch: string,
  getBooks: func.isRequired,
  searchBook: func.isRequired,
  addToCart: func.isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = store => ({
  books: store.books.books,
  bookSearch: store.books.bookSearch,
  bookSelected: store.books.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  searchBook: value => dispatch(actionsCreators.searchBook(value)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  addItem: itemId => dispatch(actionsCreators.addItem(itemId)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
