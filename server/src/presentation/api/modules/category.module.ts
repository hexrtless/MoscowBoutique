import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { Category, CategoryModel } from "src/infra/db/models/category.model"
import { CategoryService } from "src/core/category/service/category.service"
import { CategoryDao } from "src/infra/db/dao/category.dao"
import { CategoryController } from "../controllers/category.controller"


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Category.name, schema: CategoryModel}
        ])
    ],
    providers: [CategoryService, CategoryDao],
    controllers: [CategoryController]
})


export class CategoriesModule {}