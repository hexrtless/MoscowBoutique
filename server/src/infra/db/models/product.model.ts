import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose"
import { CategoryDocument } from "./category.model"


export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    name: string

    @Prop()
    description: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: string | CategoryDocument

    @Prop()
    img: string

    @Prop()
    scheme_img: string | null

    @Prop()
    weight: number

    @Prop()
    size: string

    @Prop()
    color: string

    @Prop()
    price: number

    @Prop()
    count: number
}

export const ProductModel = SchemaFactory.createForClass(Product)