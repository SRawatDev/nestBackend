import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private product = [
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 2,
      name: 'samsung',
    },
    {
      id: 3,
      name: 'redmi',
    },
    {
      id: 4,
      name: 'one plus',
    },
  ];
  getAllProduct() {
    return this.product;
  }
  getProductById(id: number) {
    return this.product.find((item) => item.id === id);
  }
}
