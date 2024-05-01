import { Injectable } from "@nestjs/common"

import { ProductDao } from "src/infra/db/dao/product.dao"
import { Product } from "src/infra/db/models/product.model"
import { GetProductsDto } from "../dto/getProducts.dto"
import { IdDto } from "src/core/common/dto/id.dto"


@Injectable()
export class ProductService {

    constructor(private readonly productDao: ProductDao) {}


    async getAll(dto: GetProductsDto): Promise<Product[]> {
        return this.productDao.getAll(dto)
    }

    async getById(dto: IdDto): Promise<Product> {
      return this.productDao.getById(dto.id)
  }
    
}