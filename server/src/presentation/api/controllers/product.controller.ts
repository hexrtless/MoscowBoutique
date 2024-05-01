import { Controller, Get, Param, Query } from "@nestjs/common"

import { ProductService } from "src/core/product/service/product.service"
import { GetProductsDto } from "src/core/product/dto/getProducts.dto"

import { Product } from "src/infra/db/models/product.model"
import { IdDto } from "src/core/common/dto/id.dto"


@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) {}


    @Get('all')
    getAll(@Query('category') category: string, @Query('sort') sort: string): Promise<Product[]> {
        const QueriesDTO = {
          category: category ? category : "default",
          sort: sort ? sort : "default"
        } as GetProductsDto

        return this.productService.getAll(QueriesDTO)
    }

    @Get(':id')
    getById(@Param() dto: IdDto): Promise<Product> {
        return this.productService.getById(dto)
    }

}