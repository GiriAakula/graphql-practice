const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express();
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Giri:7m!zPBuV4k!B@cluster0.yg39y.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('mongodb connected')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen('4000', () => console.log('server listening in 4000'))