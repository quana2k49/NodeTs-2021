import express from "express";
import { Passport } from "passport";

import { ProductRoute } from "../../product/product.route";

var app = express();

export class BaseRoutes {
  private _passport: Passport;

  constructor(passport: Passport) {
    this._passport = passport;
  }

  get routes() {
    app.use("/api/v1/product", new ProductRoute().routes);

    return app;
  }
}
