import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({required: true, unique: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop({required: true, default: 'client'})
    role: 'client' | 'admin'

    @Prop({required: true})
    first_name: string

    @Prop({required: true})
    last_name: string

    @Prop()
    father_name: string

    @Prop({required: true})
    birthday: string

    @Prop({default: null})
    gender: 'male' | 'female' | null
}

export const UserModel = SchemaFactory.createForClass(User)