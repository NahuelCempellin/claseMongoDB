import {prop, getModelForClass} from '@typegoose/typegoose'



class User{
 @prop()
 userName!: string
 @prop()
 password!: string
 @prop()
 mail!: string

}

const UserModel = getModelForClass(User)
export default UserModel