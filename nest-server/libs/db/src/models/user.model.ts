import { prop, ModelOptions, DocumentType } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

export type UserDocument=DocumentType<User>

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop()
  username: string;
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;
}
