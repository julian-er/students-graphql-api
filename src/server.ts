import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import {graphqlHTTP} from 'express-graphql';


const app = express();
//settings
app.set("port", 3000);
app.use("*", cors());
app.use(compression());


//define endpoint with expressPlayground
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql:true
  })

);


//starting server
app.listen(app.get("port"), () => {
  console.log(`server on port http://localhost:${app.get("port")}/`);
  console.log(`server apollo on http://localhost:${app.get("port")}/graphql  `);
});
