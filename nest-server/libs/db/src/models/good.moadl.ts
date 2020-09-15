import { prop, Ref } from '@typegoose/typegoose';
import { Category } from './category.model';

export class Good {
  @prop({ ref: () => Category })
  category: Ref<Category>;
  @prop()
  name: string;
  @prop()
  desc: string;
  @prop()
  price: string;
  @prop()
  cover: string;
}
