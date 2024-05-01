import { Controller, Get } from "@nestjs/common"

import { CategoryService } from "src/core/category/service/category.service"
import { Category } from "src/infra/db/models/category.model"


@Controller('categories')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}


    @Get('all/')
    getAll(): Promise<Category[]> {
        return this.categoryService.getAll()
    }

}