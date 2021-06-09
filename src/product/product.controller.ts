import { IProduct } from "./product.model";
import { ProductService } from "./product.service";

import * as express from "express";

export class ProductController {
  private static _productController: ProductController;

  static getInstance() {
    if (!this._productController) {
      return (this._productController = new ProductController());
    }
    return this._productController;
  }

  async createProduct(req: express.Request, res: express.Response) {
    const product = req.body;

    try {
      const newRecord = await ProductService.getInstance().createProduct(
        product
      );
      return res.json({ product: newRecord });
    } catch (error) {
      return res.json(error);
    }
  }

  getProduct() {
    return ProductService.getInstance().getProducts();
  }
}
