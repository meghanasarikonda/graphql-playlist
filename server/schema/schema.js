const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const bookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: bookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args) {
        // code to get data from db or other sources
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery
})