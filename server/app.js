const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PSWRD}@ds211613.mlab.com:11613/gql-pro`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000, () => {
  console.log('listening this on 4000')
});