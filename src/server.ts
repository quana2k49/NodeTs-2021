import { DatabaseConnection } from "./utils/database";
import { BaseRoutes } from "./utils/base/base.route";

import express from 'express' 
import passport from 'passport' 

const app = express();

// app
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000 + 2;

// database
DatabaseConnection.init();

app.use(new BaseRoutes(passport).routes);

app.listen(port, () => {
  console.log("///////////////");
  console.log("_____________ App is listening on port:" + port);
  console.log("///////////////");
});
