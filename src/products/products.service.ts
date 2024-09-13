import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

  constructor(private readonly repository: ProductsRepository){}

  findAll() {
    return this.repository.findAll();
  }
}
