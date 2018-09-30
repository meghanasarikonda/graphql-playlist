import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from '../queries/queries.js';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };

    this.displayAuthors = () => {
      let data = this.props.getAuthorsQuery;
        if (data.loading) {
          return (<option disabled>Loading authors</option>);
        } else {
          return data.authors.map(author => {
            return (
              <option key={author.id} value={author.id}>{author.name}</option>
            )
          })
        }
    };

    this.SubmitForm = (e) => {
      e.preventDefault();
      this.props.addBookMutation();
    }
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.SubmitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) }/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ (e) => this.setState({ text: e.target.value }) }/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={ (e) => this.setState({ authorId: e.target.value }) }>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);