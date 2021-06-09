import * as mongoose from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  updatedBy?: string;
  createdBy?: string;
  type?: string;
  cover: string;
}

export interface IProductDocument extends IProduct, mongoose.Document {
  _id: any;
}
export interface IProductModel extends mongoose.Model<IProductDocument> {}

export const ProductSchema = new mongoose.Schema<
  IProductDocument,
  IProductModel
>({
  name: { type: String, required: true },
  price: { type: String, require: true },
  updatedBy: { type: String, require: true },
  createdBy: { type: String, require: true },
  type: String,
  cover: { type: String, require: true },
});

export const Product: IProductModel = mongoose.model<
  IProductDocument,
  IProductModel
>("Product", ProductSchema);
