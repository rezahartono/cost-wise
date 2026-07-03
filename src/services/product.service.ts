import { productRepository } from "@/repositories/product.repository";

export const productService = {
  async isEmpty(): Promise<boolean> {
    const count = await productRepository.count();
    return count === 0;
  },
};
