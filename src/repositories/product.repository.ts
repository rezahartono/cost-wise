import { db } from "@/shared/utils/database";
import type { Product } from "@/models/product.model";

export const productRepository = {
  async count(): Promise<number> {
    return db.products.count();
  },

  async getAll(): Promise<Product[]> {
    return db.products.toArray();
  },

  async getById(id: number): Promise<Product | undefined> {
    return db.products.get(id);
  },

  async add(product: Product): Promise<number> {
    return db.products.add(product);
  },

  async update(id: number, product: Partial<Product>): Promise<number> {
    return db.products.update(id, product);
  },

  async delete(id: number): Promise<void> {
    return db.products.delete(id);
  },
};
