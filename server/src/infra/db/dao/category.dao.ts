import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { Category, CategoryDocument } from "../models/category.model"


export class CategoryDao {

    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}


    async getAll(): Promise<Category[]> {
      return this.categoryModel.find().exec()
    }
    
}