import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries.js';

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>loading...</div>);
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.displayBooks()}
        </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);