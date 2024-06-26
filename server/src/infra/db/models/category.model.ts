import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"


export type CategoryDocument = Category & Document

@Schema()
export class Category {
    @Prop()
    category_name: string
}

export const CategoryModel = SchemaFactory.createForClass(Category)