import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { UserShow } from "src/core/user/dto/userShow.dto"
import { User, UserDocument } from "src/infra/db/models/user.model"


export class UserDao {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


    async findById(id: string): Promise<UserShow> {
        const user = await this.userModel.findById(id)

        return {
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            father_name: user.father_name,
            birthday: user.birthday,
            gender: user.gender,
            email: user.email,
            role: user.role
        } as UserShow
    }

}