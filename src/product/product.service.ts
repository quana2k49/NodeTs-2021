import { ProductDAO } from "./product.dao";
import { IProduct, Product } from "./product.model";

export class ProductService {
  private static _productService: ProductService;

  static getInstance() {
    if (!this._productService) {
      this._productService = new ProductService();
      return this._productService;
    }
    return this._productService;
  }

  async createProduct(productObj: IProduct) {
    return ProductDAO.getInstance().createProduct(productObj);
  }

  async getProducts() {
    return ProductDAO.getInstance().getProducts();
  }
}
