import * as express from "express";

import { ProductController } from "./product.controller";

const router = express.Router();

export class ProductRoute {
  get routes() {
    const controller = ProductController.getInstance();

    // TODO: CREATE DOCUMENT FOR THESE API ENDPOINT
    router.post("/", controller.createProduct);

    router.get("/list", controller.getProduct);

    return router;
  }
}
