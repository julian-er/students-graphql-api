//testing serve
//console.log('hi, this is the online academy !')

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema'
import expressPlayGround from 'graphql-playground-middleware-express'


const app = express()
//settings
app.set('port', 3000)
app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection:true,
})

server.applyMiddleware({app})

//define endpoint with expressPlayground
app.get('/', expressPlayGround({
    endpoint: '/graphql'
}))

const httpServer = createServer(app)

//starting server
httpServer.listen(
    app.get('port'),
    ()=> {
        console.log(`server on port http://localhost:${app.get('port')}/`)
        console.log(`server apollo on http://localhost:${app.get('port')}/graphql  `)
    }
)