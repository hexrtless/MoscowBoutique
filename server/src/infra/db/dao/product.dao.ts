import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { GetProductsDto } from "src/core/product/dto/getProducts.dto"
import { UpdateCountDto } from "src/core/product/dto/updateCount.dto"
import { Product, ProductDocument } from "src/infra/db/models/product.model"


export class ProductDao {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    
    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id).populate({
          path : 'category',
          populate : {
              path : '_id'
          }
        }).exec()
    }

    async getAll(dto: GetProductsDto): Promise<Product[]> {
      let result;
      
      if (dto.category === "default" && dto.sort === "default") {
        result = this.productModel.find()
      } else if(dto.category === 'default' && dto.sort !== "default") {
        result = this.productModel.find().sort({'price': dto.sort === "asc" ? 1 : -1})
      } else if(dto.category !== 'default' && dto.sort !== "default") {
        result = this.productModel.find({category: dto.category}).sort({'price': dto.sort === "asc" ? 1 : -1})
      } else if (dto.category !== 'default' && dto.sort === "default") {
        result = this.productModel.find({category: dto.category})
      }

      return result.populate({
        path : 'category',
        populate : {
            path : '_id'
        }
      }).exec()
    }

    async updateCount(dto: UpdateCountDto) {
        const product = await this.productModel.findById(dto.id)

        product.count -= dto.count

        await product.save()

        return product
    }
    
}