import { Injectable } from "@nestjs/common"

import { CategoryDao } from "src/infra/db/dao/category.dao"
import { Category } from "src/infra/db/models/category.model"


@Injectable()
export class CategoryService {

    constructor(private readonly categoryDao: CategoryDao) {}


    async getAll(): Promise<Category[]> {
        return this.categoryDao.getAll()
    }
    
}