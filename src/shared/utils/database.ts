import type { Product } from "@/models/product.model";
import { Dexie, type EntityTable } from "dexie";

export class Database extends Dexie {
  products!: EntityTable<Product>;

  constructor() {
    super("CostWiseDatabase");
    this.version(1).stores({
      products: "++id, name, satuan",
    });
  }
}

export const db = new Database();
