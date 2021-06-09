import { Product, IProduct } from "./product.model";

export class ProductDAO {
  private static _productDAO: ProductDAO;

  static getInstance() {
    if (!this._productDAO) {
      this._productDAO = new ProductDAO();
    }
    return this._productDAO;
  }

  getProductById() {}

  getProducts = async () => {
    return Product.find().lean();
  };

  createProduct = async (productObj: IProduct) => {
    return new Product(productObj);
  };
}
